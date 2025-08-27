from fastapi import APIRouter 

router = APIRouter(prefix='/auth')

@router.post('/register')
def register():
    return {'Message': 'user registered'}

@router.post('/login')
def login():
    return {'Message': 'user logged in'}