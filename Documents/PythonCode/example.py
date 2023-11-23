import random, string
#! python3
# Practicing defining methods in Python - 
# Question 1: how does the return statement work in Python?
# Question 2: How does splicing strings work in Python?

def guessNickName():
    name = input("Enter your name, and I will guess your nickname:\n")
    nickname = name[0:3]
    print("Your new nickname is " + nickname)

guessNickName()

