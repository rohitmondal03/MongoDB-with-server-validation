import { detailModel } from "@/models/demo-schema";
import Form from "@/components/form";


export default async function Home() {
  let fetchedData: any[] = [];

  try {
    const data = await detailModel.find();
    fetchedData= [...data];
  } catch (error) {
    alert("ERROR OCCURED WHILE FETCHING DATA !!")
  }

  return (
    <section className="min-h-screen max-h-fit flex flex-col items-center justify-center">
      <div className="space-y-5">
        {fetchedData.map((data) => (
          <div
            key={data.password}
            className="text-white"
          >
            <p>{data.name}</p>
            <p>{data.password}</p>
          </div>
        ))}
      </div>

      <Form />
    </section>
  );
}
