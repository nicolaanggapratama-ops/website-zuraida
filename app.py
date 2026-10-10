from pathlib import Path
from flask import Flask, render_template, send_from_directory

BASE_DIR = Path(__file__).resolve().parent
AUDIO_DIR = BASE_DIR / "static" / "audio"
AUDIO_FILE = AUDIO_DIR / "cinta_luar_biasa.mp3"

app = Flask(__name__, template_folder=str(BASE_DIR / "templates"), static_folder=str(BASE_DIR / "static"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/cek-audio")
def cek_audio():
    if AUDIO_FILE.is_file():
        return {"audio_ditemukan": True, "nama_file": AUDIO_FILE.name, "ukuran_byte": AUDIO_FILE.stat().st_size}, 200
    return {"audio_ditemukan": False, "lokasi_yang_dicari": str(AUDIO_FILE)}, 404

if __name__ == "__main__":
    print("=" * 55)
    print("WEBSITE ULANG TAHUN ZURAIDA")
    print("Lokasi app.py :", Path(__file__).resolve())
    print("Lokasi audio  :", AUDIO_FILE)
    print("Audio ditemukan:", AUDIO_FILE.is_file())
    print("Buka website  : http://127.0.0.1:5001")
    print("Tes audio     : http://127.0.0.1:5001/cek-audio")
    print("=" * 55)
    app.run(host="127.0.0.1", port=5001, debug=False, use_reloader=False)
