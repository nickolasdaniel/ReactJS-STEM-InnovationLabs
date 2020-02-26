from django.shortcuts import render
from rest_framework import viewsets
# Create your views here.
from rest_framework.response import Response
from django.db.models import Q
from rest_framework import generics,mixins
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from .models import CustomUser,PacientProfileUser,DoctorProfileUser
from .serializers import PacientProfileUserSerializer,LoginCustomUserSerializer,CustomUserSerializator,DoctorProfileUserSerializer
from rest_framework import status
from .permissions import IsLoggedInUserOrAdmin, IsAdminUser
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework.status import HTTP_201_CREATED
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from django.http import HttpResponse

def index(request):
  return HttpResponse("Hello world!")

class UserViewSet(viewsets.ModelViewSet):

    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializator

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [AllowAny]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]

class PacientProfileView(viewsets.ModelViewSet):

    queryset = PacientProfileUser.objects.all()
    serializer_class = PacientProfileUserSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [AllowAny]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]

class DoctorProfileView(viewsets.ModelViewSet):

    queryset = DoctorProfileUser.objects.all()
    serializer_class = DoctorProfileUserSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [AllowAny]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]


class LoginView(GenericAPIView):
    serializer_class = LoginCustomUserSerializer
    permission_classes = [AllowAny]

    def post(self,request,*args,**kwargs):
        serializer = self.serializer_class(data = request.data,context = {'request':request})
        serializer.is_valid(raise_exception=True)
        print(serializer.validated_data['user'])
        user = serializer.validated_data['user']
        token,create = Token.objects.get_or_create(user = user)
        return Response({
            'token':token.key,
            'user':(user.first_name +" "+ user.last_name),
            'email':user.email,
            'pk':user.pk,
            'doctor':user.is_doctor,
            'pacient':user.is_pacient
        },
            status=HTTP_201_CREATED
        )
