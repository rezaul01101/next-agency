import service1 from '@/public/images/service1-img1.png';
import service2 from '@/public/images/service1-img2.png';
import service3 from '@/public/images/service1-img3.png';
import service4 from '@/public/images/service1-img4.png';
import service5 from '@/public/images/service1-img5.png';
import service6 from '@/public/images/service1-img6.png';
import service7 from '@/public/images/service1-img7.png';
import service8 from '@/public/images/service1-img8.png';
import service9 from '@/public/images/service1-img9.png';



import { FaChartPie } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GiArcheryTarget } from "react-icons/gi";



export const servicesData=[
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

export const allServices = [
    {
        id: 1,
        title: 'Executive Search Services',
        subtitle: `Whether you're looking for temporary staffing, direct hire placements`,
        image: service1,
        icon: <FaChartPie className="text-4xl text-white" />
    },
    {
        id: 2,
        title: 'HR Consulting & Staffing',
        subtitle: `Whether you're looking for temporary staffing, direct hire placements`,
        image: service2,
        icon: <GiTeacher className="text-4xl text-white" />
    },
    {
        id: 3,
        title: 'Temporary Staffing Services',
        subtitle: `Whether you're looking for temporary staffing, direct hire placements`,
        image: service3,
        icon: <GiArcheryTarget className="text-4xl text-white" />
    },
    {
        id: 4,
        title: 'Payroll Services',
        subtitle: `Efficient and accurate payroll processing`,
        image: service4,
        icon: <FaChartPie className="text-4xl text-white" />
    },
    {
        id: 5,
        title: 'Employee Benefits Administration',
        subtitle: `Comprehensive benefits management`,
        image: service5,
        icon: <GiTeacher className="text-4xl text-white" />
    },
    {
        id: 6,
        title: 'Compliance Services',
        subtitle: `Ensuring adherence to regulations`,
        image: service6,
        icon: <GiArcheryTarget className="text-4xl text-white" />
    },
    {
        id: 7,
        title: 'Training & Development',
        subtitle: `Enhancing employee skills and knowledge`,
        image: service7,
        icon: <FaChartPie className="text-4xl text-white" />
    },
    {
        id: 8,
        title: 'Performance Management',
        subtitle: `Optimizing employee performance`,
        image: service8,
        icon: <GiTeacher className="text-4xl text-white" />
    },
    {
        id: 9,
        title: 'Recruitment Process Outsourcing',
        subtitle: `Streamlining your recruitment process`,
        image: service9,
        icon: <GiArcheryTarget className="text-4xl text-white" />
    }
];


