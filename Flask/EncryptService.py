import bcrypt

#password should be passed as a string
def encryptPassword(password):
    return bcrypt.hashpw(password.encode('UTF-8'), bcrypt.gensalt())

#plaintext shuold be pass as a string
#ciphertext should be passed as a string
def verifyPassword(plaintext, cipherText):
    if bcrypt.checkpw(plaintext.encode('UTF-8'), cipherText.encode('UTF-8')): #use if statement so errors just return false
        return True
    else:
        return False