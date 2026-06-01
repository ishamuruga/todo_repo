import os
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

with open("diff.txt", "r") as f:
    code_diff = f.read()

response = client.chat.completions.create(
    model="gpt-4.1-mini",
    messages=[
        {"role": "system", "content": "You are a strict code reviewer."},
        {"role": "user", "content": f"Review this code for any coding rules and guidelines:\n{code_diff}"}
    ]
)

print(response.choices[0].message.content)