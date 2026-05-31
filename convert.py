from pypdf import PdfWriter as PdfMerger
from pdf2image import convert_from_path
import qrcode
import glob


pdfs = glob.glob('enigmas/*enigma*.pdf')

merger = PdfMerger()
for pdf in pdfs:
    merger.append(pdf)
merger.write("all_enigmas.pdf")
merger.close()

for pdf in pdfs:
    print(pdf)
    images = convert_from_path(pdf)
    images[0].save(pdf.replace('.pdf', '.png'), 'PNG')

img = qrcode.make('https://mics-lab.github.io/Enigmas-Summer2026')
img.save("QRanswer.png")
img = qrcode.make('https://mics-lab.github.io/Enigmas-Summer2026/enigmas')
img.save("QRstatement.png")
