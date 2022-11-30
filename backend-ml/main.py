# from typing import List

# from fastapi import Depends, FastAPI, HTTPException
# from sqlalchemy.orm import Session

from fastapi import FastAPI
from routers import crab


app = FastAPI()


app.include_router(crab.router)
