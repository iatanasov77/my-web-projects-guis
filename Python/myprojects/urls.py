from django.urls import path
#from . import views

from .views import home
from .views import projects

############################
#  Test Views
############################
from .views import posts
from .views import polls

urlpatterns = [
    path( '', home.index, name='app_home' ),
    
    # Projects
    path( 'projects/', projects.index, name='projects_index' ),
    
    ############################
    #  Testing URL's'
    ############################
    path('posts/', posts.index, name='posts_index'),
    path('posts/post/', posts.individual_post, name='individual_post'),
    
     # ex: /polls/
    path('polls/', polls.IndexView.as_view(), name='polls_index'),
    # ex: /polls/5/
    path('polls/<int:question_id>/', polls.DetailView.as_view(), name='polls_detail'),
    # ex: /polls/5/results/
    path('polls/<int:question_id>/results/', polls.ResultsView.as_view(), name='polls_results'),
    # ex: /polls/5/vote/
    path('polls/<int:question_id>/vote/', polls.vote, name='polls_vote'),
]
    