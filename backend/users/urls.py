
from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter

from users.views import RegisterView

router = DefaultRouter()
router.register('register',RegisterView,basename='register')
urlpatterns = router.urls
