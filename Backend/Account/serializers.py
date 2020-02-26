from rest_framework import serializers
from .models import CustomUser,PacientProfileUser,DoctorProfileUser
from rest_framework.validators import ValidationError
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import check_password


jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class DoctorProfileUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = DoctorProfileUser

        fields = ('profile_doctor','profile_first_name','profile_last_name','hospital','adress_hospital','phone_number','caption','profile_picture','buletin_picture')

    def update(self,instance,validated_data):

        instance.profile_first_name = validated_data.get('profile_first_name',instance.profile_first_name)
        instance.profile_last_name = validated_data.get('profile_last_name',instance.profile_last_name)

        instance.hospital = validated_data.get('hospital',instance.hospital)
        instance.adress_hospital = validated_data.get('adress_hospital',instance.adress_hospital)

        instance.phone_number = validated_data.get('phone_number',instance.phone_number)
        instance.caption = validated_data.get('caption',instance.caption)

        instance.profile_picture = validated_data.get('profile_picture',instance.profile_picture)
        instance.buletin_picture = validated_data.get('buletin_picture',instance.buletin_picture)

        instance.save()

        return instance

class PacientProfileUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = PacientProfileUser

        fields = ('profile_pacient','profile_first_name','profile_last_name','cnp','phone_number','caption','blood_transfuzion','profile_picture','buletin_picture','analize')

    def update(self,instance,validated_data):

        instance.profile_first_name = validated_data.get('profile_first_name',instance.profile_first_name)
        instance.profile_last_name = validated_data.get('profile_last_name',instance.profile_last_name)

        instance.cnp = validated_data.get('cnp',instance.cnp)

        instance.phone_number = validated_data.get('phone_number',instance.phone_number)
        instance.caption = validated_data.get('caption',instance.caption)

        instance.blood_transfuzion = validated_data.get('blood_transfuzion',instance.blood_transfuzion)

        instance.profile_picture = validated_data.get('profile_picture',instance.profile_picture)
        instance.buletin_picture = validated_data.get('buletin_picture',instance.buletin_picture)

        instance.analize = validated_data.get('analize',instance.analize)

        instance.save()

        return instance


class CustomUserSerializator(serializers.HyperlinkedModelSerializer):

    # profile_pacient = PacientProfileUserSerializer(many=False,required=True)
    token = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        # exclude = ('confirm_email', 'confirm_password')

        fields = ('token','pk','is_pacient','is_doctor','first_name','last_name','email','password')
        extra_kwargs = {'password':{'write_only':True}}

        read_only_fields = []

    def get_token(self, obj):

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)

        return token

    def create(self,validated_data):

        password = validated_data.get('password')
        email = validated_data.get('email')

        user = CustomUser.objects.create(
            **validated_data
        )

        user.username = email
        user.set_password(password)

        user.save()
        return user


class LoginCustomUserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length = 30)

    def authenticate(self,**kwargs):
        return authenticate(self.context['request'],**kwargs)

    def validate(self,data):
        if data is None:
            return Response({'error': 'Please provide both username and password'},
                status=HTTP_400_BAD_REQUEST)

        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(email = email,password = password)

            if user is not None:
                print(user)
            else:
                raise ValidationError("Incorrect credential please try again.")
        else:
            msg = _('Must include "email" and "passowrd".')

        data['user'] = user

        return data
