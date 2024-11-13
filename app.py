from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

# Route for the main game page (Objective 5)

@app.route('/get-symbols')
def get_symbols():
    url = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json'
    response = requests.get(url)
    characters = response.json()

    symbols = []
    for character in characters[:8]:
        symbol = {
            'name': character['name'],
            'image': character['image']
        }
        symbols.append(symbol)

    return jsonify(symbols)

if __name__ == '__main__':
    app.run(debug=True)
