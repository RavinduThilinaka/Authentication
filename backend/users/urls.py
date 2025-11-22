
from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter

from users.views import RegisterView, LoginViewSet

router = DefaultRouter()
router.register('register',RegisterView,basename='register')
router.register('login',LoginViewSet,basename='login')
urlpatterns = router.urls
