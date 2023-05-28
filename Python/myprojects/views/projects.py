from django.shortcuts import render

def index( request ):
    return render( request, 'myprojects/pages/projects/index.html', {} )
