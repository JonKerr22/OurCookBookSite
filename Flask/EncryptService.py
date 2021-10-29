import bcrypt

def encryptPassword(password):
    print('encrypting password')
    return bcrypt.hashpw(password, bcrypt.gensalt())

def verifyPassword(plaintext, cipherText):
    if bcrypt.checkpw(plaintext, cipherText): #use if statement so errors just return false
        return True
    else:
        return False