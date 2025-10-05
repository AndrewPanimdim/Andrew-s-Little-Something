import json

with open("Andrew.json", "r") as file:
    drewsdata = json.load(file)

drewsdata['name'] = drewsdata['name'].lower()

def chatbotboutDrew():
    greetings = ["hi", "hello", "sup", "greetings"]
    print("Du: Hi! I'm Du, Andrew's little chatbot assistant. ask me anything about Andrew or this little project")
    while True:
        user = input("You: ").lower()

        if any(word in user for word in greetings):
            print("Du: Hi there, how can I help you?")
            continue

        if  user in ["who is andrew"]:
            print("Andrew is a curious kid who likes self improvements and building software")
            continue

        if any(word in user for word in ["gay friend"]):
            print("Andrew's gay friend is Jose Francis Rommanilos")
            continue

        if any(word in user for word in ["goodbye", "bye"]):
            print("Du: Goodbye, take care!")
            break

        found = False
        for key, value in drewsdata.items():

            if key.lower() in user:
                if isinstance(value, dict):
                    print(f"Du: Here's what isi know about {key}:")
                    for sub_key, sub_val in value.items():
                        print(f"  - {sub_key} is {sub_val}")
                else:
                    print(f"Du: Andrew's {key} is {value}.")
                found = True
                break
        if not found:
            print("Du: I don't understand. try asking me about school, course, hobbies, favorites, etc.")


chatbotboutDrew()