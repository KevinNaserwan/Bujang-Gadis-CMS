import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error parsing form data' });
    }

    const { cv, foto, sertifikat } = files;

    try {
      // Simpan file di direktori lokal
      const uploadDir = path.join(process.cwd(), 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }

      if (cv) {
        const cvPath = path.join(uploadDir, cv.newFilename);
        await fs.promises.writeFile(cvPath, cv.buffer);
      }

      if (foto) {
        const fotoPath = path.join(uploadDir, foto.newFilename);
        await fs.promises.writeFile(fotoPath, foto.buffer);
      }

      if (sertifikat) {
        const sertifikatPath = path.join(uploadDir, sertifikat.newFilename);
        await fs.promises.writeFile(sertifikatPath, sertifikat.buffer);
      }

      res.status(200).json({ message: 'Files uploaded successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error uploading files' });
    }
  });
}