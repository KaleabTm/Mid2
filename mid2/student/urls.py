from django.urls import path
from.import views

urlpatterns=[
    path('List/',views.StuView.as_view()),
    path('Update/<int:pk>/',views.StuUpdate.as_view()),
    path('Delete/<int:pk>/',views.StuDelete.as_view())
]