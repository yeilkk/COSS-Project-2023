from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return render_template('index.html')


@app.route('/resume')
def move_resume():
    return render_template('resume.html')


@app.route('/company')
def move_company():
    return render_template('company.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
