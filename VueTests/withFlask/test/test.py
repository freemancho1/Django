from pathlib import Path
import os


BASE_DIR = Path(__file__).parent
print(BASE_DIR)
dir = BASE_DIR.joinpath("db.sqlite")
print(type(dir), dir)

dir2 = os.path.dirname(os.path.abspath(__file__))
print("sqlite://" + os.path.join(dir2, "db.sqlite"))