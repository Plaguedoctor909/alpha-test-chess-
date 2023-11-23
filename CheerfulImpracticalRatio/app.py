from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/artisans')
def get_artisans():
  artisans = ['Artisan 1', 'Artisan 2', 'Artisan 3']
  return jsonify(artisans)


@app.route('/products')
def get_products():
  products = ['Product 1', 'Product 2', 'Product 3']
  return jsonify(products)


if __name__ == '__main__':
  app.run(debug=True)
