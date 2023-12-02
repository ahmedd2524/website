from flask import Flask, jsonify, request
import requests
import json

app = Flask(__name__)

@app.route('/data', methods=['GET'])
def get_data():
    url = "https://8ixct1d30f.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/data_r"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else:
        return "Error: Failed to fetch data"

@app.route('/command', methods=['POST'])
def send_command():
    url = "https://8ixct1d30f.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/command_w"
    data = request.get_json()

    headers = {
        "Content-Type": "application/json"
    }
    response = requests.post(url, data=json.dumps(data), headers=headers)

    if response.status_code == 200:
        return "Command sent successfully"
    else:
        return "Error: Failed to send command"

if __name__ == '__main__':
    app.run()