from django.contrib import admin
from .models import CustomUser,PacientProfileUser,DoctorProfileUser

admin.site.register(CustomUser)
admin.site.register(PacientProfileUser)
admin.site.register(DoctorProfileUser)
from rest_framework.authtoken.admin import TokenAdmin

TokenAdmin.raw_id_fields = ['user']