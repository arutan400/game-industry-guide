import os
from PIL import Image

# フォルダパスの設定
folder_path = 'C:/Code_space'

# フォルダが存在しない場合、作成する
if not os.path.exists(folder_path):
    os.makedirs(folder_path)

# 10x10のピクセルアートを作成
img = Image.new('RGB', (10, 10), "white")
pixels = img.load()

# ピクセルごとに色を指定
for i in range(10):
    for j in range(10):
        if (i + j) % 2 == 0:
            pixels[i, j] = (255, 0, 0)  # 赤色
        else:
            pixels[i, j] = (0, 255, 0)  # 緑色

# 画像を10倍に拡大
img = img.resize((100, 100), Image.NEAREST)

# 画像を保存
file_path = os.path.join(folder_path, 'pixel_art.png')
img.save(file_path)

print(f"画像は {file_path} に保存されました")