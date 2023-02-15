import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import MapComponent from "../components/MapComponent";
import { format } from "date-fns";
import data3 from "../services/data3.json";
function Search() {
  const router = useRouter();
  const { location, startDate, endDate, nbOfGuests } = router.query;

  const formatStartDate =
    startDate && format(new Date(startDate), "dd MMMM yy");

  const formatEndDate = endDate && format(new Date(endDate), "dd MMMM yy");

  const range = `${formatStartDate} - ${formatEndDate}`;
  console.log(data3);
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${nbOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {nbOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {data3?.map(
              ({ img, location, title, description, star, price, total }) => (
                <div>
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                </div>
              )
            )}
          </div>
        </section>
        {/* <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapComponent />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
export default Search;
