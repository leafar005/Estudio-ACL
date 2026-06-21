import json
import os

files = [
    "/home/rafaelcasado/.gemini/antigravity-cli/brain/1eed301d-9f4c-4f19-bd55-46e680534842/scratch/flashcards-cmmi.json",
    "/home/rafaelcasado/.gemini/antigravity-cli/brain/9af170a1-32c3-4674-90f5-13afb949aee5/scratch/flashcards-otros.json",
    "/home/rafaelcasado/.gemini/antigravity-cli/brain/f95d875f-a79b-447b-9550-5876c16f9667/scratch/flashcards-iso-sgcs.json"
]

data = {
    "iso9000": [],
    "cmmi": [],
    "otros-modelos": [],
    "sgcs": [],
    "pai": []
}

# If any file is missing, we will just skip or use an empty list for now.
for path in files:
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            try:
                cards = json.load(f)
                for c in cards:
                    topic = c.get("topic")
                    if topic in data:
                        data[topic].append({"q": c.get("q"), "a": c.get("a")})
                    elif topic == "medicion": # map medicion to otros-modelos
                        data["otros-modelos"].append({"q": c.get("q"), "a": c.get("a")})
            except Exception as e:
                print(f"Error loading {path}: {e}")

out_path = "/home/rafaelcasado/informatica/3 curso/2 cuatri/ACL/Quiz-ACL/shared/flashcards-data.js"
with open(out_path, "w", encoding="utf-8") as f:
    f.write("window.FlashcardsData = ")
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write(";\n")

print("Flashcards merged successfully!")
