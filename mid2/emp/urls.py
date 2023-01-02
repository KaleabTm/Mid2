from django.urls import path
from.import views

urlpatterns=[
    path('List/',views.EmpView.as_view()),
    path('Update/<int:pk>/',views.EmpUpdate.as_view()),
    path('Delete/<int:pk>/',views.EmpDelete.as_view())
]