import PageHeader from '@/components/PageHeader';
import {allServices} from "@/utils/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import Pagination from "@/components/ui/Pagination";


const page = () => {
    return (
        <>
             <PageHeader name={"Our Service"} />
             <div className="bg-white relative">
                <div className='container mx-auto py-20 h-full'>
                    <div className="grid grid-cols-3 my-14 w-full gap-10">
                        {allServices.map((service) => (
                            <ServiceCard key={service.id} data={service}/>
                        ))}
                    </div>
                    <div className="flex justify-center w-full">
                        <Pagination />
                    </div>
                </div>
             </div>
        </>
    );
};

export default page;