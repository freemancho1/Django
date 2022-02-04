from main import db
from datetime import datetime
from dataclasses import dataclass


@dataclass
class Task(db.Model):
    __tablename__ = "tasks"
    __table_args = {"extend_existing": True}
    
    id: int
    title: str
    date: datetime
    completed: bool
    
    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.String(140))
    date = db.Column(db.DateTime(), default=datetime.now())
    completed = db.Column(db.Boolean(), default=False)
