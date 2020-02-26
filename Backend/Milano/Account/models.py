from django.db import models
from django.conf import settings
from django.contrib.auth.models import User,AbstractBaseUser,PermissionsMixin,BaseUserManager,AbstractUser
from django.urls import reverse
from rest_framework.reverse import reverse as api_reverse
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token
from django.utils.translation import ugettext_lazy as _

class MilanoUserManager(BaseUserManager):

    use_in_migrations = True

    def _create_user(self,email,password,**extra_fields):
        if not email:
            raise ValueError("Email must be passed")

        email = self.normalize_email(email)

        user = self.model(email = email,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, email, password=None, **extra_fields):

        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)

        return self._create_user(email,password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):

        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')

        return self._create_user(email,password, **extra_fields)


class CustomUser(AbstractUser):

    firstname = models.CharField(unique=False,max_length=20,default="")
    lastname = models.CharField(unique=False,max_length=20,default="")

    email = models.EmailField(unique=True,blank=False,max_length=50,default="")
    password = models.CharField(unique=False,blank=False,max_length=255,default="")

    username = models.CharField(max_length=50,default="")

    is_pacient = models.BooleanField('pacient',default='True')
    is_doctor = models.BooleanField('doctor',default='False')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = MilanoUserManager()

    def __str__(self):
        return str(self.email)


class PacientProfileUser(models.Model):

    profile_pacient = models.OneToOneField(CustomUser,on_delete=models.CASCADE,null=True,blank=True,unique=True)

    profile_first_name = models.CharField(unique=False,max_length=30,default="")
    profile_last_name = models.CharField(unique=False,max_length=30,default="")

    cnp = models.CharField(max_length=21,unique=False,default="0")
    phone_number = models.CharField(unique=False,max_length=20,default="1")

    caption = models.TextField(unique=False,blank=False,max_length=750,default="")

    blood_transfuzion = models.BooleanField(default=True)

    profile_picture = models.ImageField(upload_to='images/profile_images',blank=True,null=True)
    buletin_picture = models.ImageField(upload_to='images/buletin',blank=True,null=True)

    analize = models.FileField(upload_to='pdf_pacient/',blank=True,null=True)

    def __str__(self):
        return '{} {}'.format(self.profile_first_name,self.profile_last_name)

    class Meta:
        ordering = ('profile_first_name','profile_last_name',)

class DoctorProfileUser(models.Model):

    profile_doctor = models.OneToOneField(CustomUser,on_delete=models.CASCADE,null=True,blank=True)

    profile_first_name = models.CharField(unique=False,max_length=30,default="")
    profile_last_name = models.CharField(unique=False,max_length=30,default="")

    hospital = models.CharField(unique=False,max_length=50,default="None")
    adress_hospital = models.CharField(unique=False,max_length=60,default="None")

    phone_number = models.IntegerField(unique=False,default="1")

    caption = models.TextField(unique=False,blank=False,max_length=750,default="")

    profile_picture = models.ImageField(upload_to='images/profile_images',blank=True,null=True)
    buletin_picture = models.ImageField(upload_to='images/buletin',blank=True,null=True)

    def __str__(self):
        return '{} {}'.format(self.profile_first_name,self.profile_last_name)

    class Meta:
        ordering = ('profile_first_name','profile_last_name',)


def create_user(sender, **kwargs):
    if kwargs['created']:
        car = CustomUser.objects.create(user=kwargs['instance'].user)
        Token.objects.create(user = kwargs['instance'])

post_save.connect(create_user, sender=User)

def create_user_profile(sender,instance,created,**kwargs):
    if created:
        PacientProfileUser.objects.create()

post_save.connect(create_user_profile,sender=CustomUser)

def create_user_profile(sender,instance,created,**kwargs):
    if created:
        DoctorProfileUser.objects.create()

post_save.connect(create_user_profile,sender=CustomUser)


# class DoctorUser(AbstractUser):

#     firstname = models.CharField(unique=False,max_length=20,default="")
#     lastname = models.CharField(unique=False,max_length=20,default="")

#     email = models.EmailField(unique=True,blank=False,max_length=50,default="")
#     password = models.CharField(unique=False,blank=False,max_length=255,default="")

#     username = models.CharField(max_length=50,default="")

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []

#     objects = MilanoUserManager()

#     def __str__(self):
#         return str(self.email)

# class DoctorProfileUser(models.Model):

#     profile_doctor = models.OneToOneField(DoctorUser,on_delete=models.CASCADE,null=True,blank=True)

#     profile_first_name = models.CharField(unique=False,max_length=30,default="")
#     profile_last_name = models.CharField(unique=False,max_length=30,default="")

#     hospital = models.CharField(unique=False,max_length=50,default="None")
#     adress_hospital = models.CharField(unique=False,max_length=60,default="None")

#     phone_number = models.CharField(unique=False,max_length=20,default="1")

#     caption = models.TextField(unique=False,blank=False,max_length=750,default="")

#     profile_picture = models.ImageField(upload_to='images/profile_images',blank=True,null=True)
#     buletin_picture = models.ImageField(upload_to='images/buletin',blank=True,null=True)

#     def __str__(self):
#         return '{} {}'.format(self.profile_first_name,self.profile_last_name)

#     class Meta:
#         ordering = ('profile_first_name','profile_last_name',)

# def create_user(sender, **kwargs):
#     if kwargs['created']:
#         car = DoctorUser.objects.create(user=kwargs['instance'].user)
#         Token.objects.create(user = kwargs['instance'])

# post_save.connect(create_user, sender=User)

# def create_user_profile(sender,instance,created,**kwargs):
#     if created:
#         DoctorProfileUser.objects.create()

# post_save.connect(create_user_profile,sender=DoctorUser)
