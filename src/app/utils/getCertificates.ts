import certificatesData from "../data/certificates.json";
import type { CertificatesData, Certificate } from "../data/interfaces";

const data = certificatesData as CertificatesData;

export function getCertificates(): Certificate[] {
  return data.certificates;
}
