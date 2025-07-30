import sqlite3

connection = sqlite3.connect('roflweb.db')

cursor = connection.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS comments (nickname TEXT, comment TEXT, date TEXT);")

cursor.execute("INSERT INTO comments (nickname, comment, date) VALUES (?, ?, ?);", ('admin', 'anton', '27/07/2025'))
connection.commit()

cursor.execute("SELECT * FROM comments;")
comments = cursor.fetchall()
print(comments)

# Others: 
# DELEET FROM comments WHERE nickname = 'admin';
# UPDATE comments SET comment = 'new ? WHERE nickname = ('admin', 'anton');