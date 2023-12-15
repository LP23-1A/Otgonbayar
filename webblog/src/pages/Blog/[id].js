import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Detail from "@/components/SinglePost";

const BlogDetail = () => {
  const [detail, setDetail] = useState();
  const router = useRouter();

  const fetchDetail = async () => {
    const BASE_URL = 'https://dev.to/api/articles';
    const res = await axios.get(BASE_URL + '/' + router.query.id);
    setDetail(res.data);
  };

  useEffect(() => {
    if (router.isReady) {
      fetchDetail();
    }
  }, [router.isReady]);

//   return <div>{detail && JSON.stringify(detail, 2, null)}</div>;
return(
    <section className='w-[1240px] m-auto flex flex-col items-center'>
        <Navbar/>
        <Detail/>
        <Footer/>
    </section>
    
)

};

export default BlogDetail;