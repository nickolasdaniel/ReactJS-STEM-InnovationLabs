from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import UserViewSet,LoginView,PacientProfileView,DoctorProfileView
from rest_framework import routers
from . import views
from rest_framework_jwt.views import obtain_jwt_token



router = routers.DefaultRouter()
router.register(r'singup_pacient',UserViewSet)
router1 = routers.DefaultRouter()
router1.register(r'profile_pacient',PacientProfileView)
router2 = routers.DefaultRouter()
router2.register(r'profile_doctor',DoctorProfileView)


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^',include(router.urls)),
    url(r'^login/', LoginView.as_view()),
    url(r'^',include(router1.urls)),
    url(r'^',include(router2.urls)),
    path('get-token/', obtain_jwt_token)
        ]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
