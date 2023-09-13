from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)


@app.route('/')
def open_index():
    return render_template('index.html')


@app.route('/resume')
def move_resume():
    return render_template('resume.html')
    # return render_template('chat.html')


@app.route('/chat')
def move_chat():
    return render_template('chat.html')


@app.route('/company')
def move_company():
    return render_template('company.html')


@socketio.on('client_message')
def handle_client_message(message):
    socketio.emit('client_message', {'client_message': message})


@socketio.on('server_message')
def handle_client_message(message):
    socketio.emit('server_message', {'server_message': "RESPONSE !!"})


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
