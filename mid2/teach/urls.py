from django.urls import path
from.import views

urlpatterns=[
    path('List/',views.TeacherView.as_view()),
    path('Update/<int:pk>/',views.TeacherUpdate.as_view()),
    path('Delete/<int:pk>',views.TeacherDelete.as_view())
]