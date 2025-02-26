import service1 from '@/public/images/service1-img1.png';
import service2 from '@/public/images/service1-img2.png';
import service3 from '@/public/images/service1-img3.png';
import { FaChartPie } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GiArcheryTarget } from "react-icons/gi";



const servicesData=[
    {
        id:1,
        title:'Executive Search Services',
        subtitle:`Whether you're looking for temporary staffing, direct hire placements`,
        image:service1,
        icon:<FaChartPie className="text-4xl text-white" />
    },
    {
        id:2,
        title:'HR Consulting & Staffing',
        subtitle:`Whether you're looking for temporary staffing, direct hire placements`,
        image:service2,
        icon:<GiTeacher className="text-4xl text-white" />
    },
    {
        id:3,
        title:'Temporary Staffing Services',
        subtitle:`Whether you're looking for temporary staffing, direct hire placements`,
        image:service3,
        icon:<GiArcheryTarget className="text-4xl text-white" />
    }
];

export default servicesData;