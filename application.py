from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():

    """
    Renders the index from the static folder.
    :return: main html page
    """
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
