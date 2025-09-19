import { useEffect, useState } from "react";
import { getDiseases } from "../services/api";
import DiseaseCard from "../components/ArticlesPage/DiseaseCard";

interface Disease {
  disease_id: number;
  name: string;
  description: string;
  symptoms?: string;
  image_example?: string | null;
}

export default function Articles() {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getDiseases();
        setDiseases(data);
      } catch (err: any) {
        console.error(err);
        setError("ไม่สามารถโหลดข้อมูลโรคได้");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">📚 Banana Diseases Articles</h2>

      {loading && <p className="text-gray-600">กำลังโหลดข้อมูล...</p>}
      {error && (
        <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-200">
          {error}
        </div>
      )}

      <div className="grid gap-6">
        {Array.isArray(diseases) && diseases.length > 0 ? (
          diseases.map((disease) => (
            <DiseaseCard key={disease.disease_id} disease={disease} />
          ))
        ) : (
          !loading && <p className="text-gray-500">ไม่มีข้อมูลโรค</p>
        )}
      </div>
    </div>
  );
}
