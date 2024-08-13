import { useParams } from 'react-router-dom';
import { FaRoad } from 'react-icons/fa6';
import InstagramSvg from '../components/ui/Svg/Instagram';
import { AiFillTikTok } from 'react-icons/ai';
import ShopeeSvg from '../components/ui/Svg/Shopee';
import Tokopedia from '/images/tokopedia.png';
import Lazada from '/images/lazada.png';
import GoogleMapsSvg from '../components/ui/Svg/GoogleMaps';
import ContentWrapper from '../components/layout/ContentWrapper';
import { FiPhone } from 'react-icons/fi';
import WhatsappSvg from '../components/ui/Svg/Whatsapp';
import Back from '../components/ui/Back';
import { useEffect, useState } from 'react';
import { getDataById } from '../libs/firebase/service';
import FacebookSvg from '../components/ui/Svg/Facebook';
import { Busines, SosialMedia } from '../types/busines';
import { formatText } from '../utils/formatText';

export default function DetailUmkmPage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Busines | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result: any = await getDataById('business', id!);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch business details.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="my-20">Loading...</div>;
  }

  if (error) {
    return (
      <div className="py-20 min-h-screen w-full flex justify-center items-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-20 min-h-screen w-full flex justify-center items-center">
        <p className="text-slate-500">No business data available.</p>
      </div>
    );
  }

  return (
    <ContentWrapper>
      <div className="my-[5.5rem] max-w-3xl mx-auto">
        <Back />
        <h1 className="mb-4 text-xl md:text-2xl font-[800] text-primary-color">Detail UMKM</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="max-w-[420px] w-full aspect-[4/3] mx-auto rounded-3xl overflow-hidden">
            <img
              src={data.profileBusines as string}
              alt={data.nameBusines}
              width={200}
              height={200}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="max-w-[420px] w-full aspect-[4/3] mx-auto rounded-3xl overflow-hidden grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2 bg-gray-100">
            {data.images && data.images.length > 0 ? (
              data.images.map((image: string, i: number) => (
                <img
                  key={i}
                  src={image}
                  alt="Image busines"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              ))
            ) : (
              <p className="m-4 italic text-sm text-slate-500">Tidak ada image pendukung</p>
            )}
          </div>
        </div>

        <div className="w-full mt-6">
          <div className="pb-4 border-b-2">
            <h1 className="text-center text-2xl font-bold">{data.nameBusines}</h1>
          </div>
          <pre className="mt-4 leading-5 text-slate-500 text-balance">
            {formatText(data.description!)}
          </pre>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-10 text-base">
          <div className="mt-4">
            <h2 className="font-semibold">Social Media :</h2>
            <div className="mt-2 space-y-2">
              {data.sosialMedia && data.sosialMedia.length > 0 ? (
                data.sosialMedia.map((item: SosialMedia) => (
                  <div key={item.name} className="flex gap-2 items-center">
                    {item.name === 'instagram' && <InstagramSvg size="20px" />}
                    {item.name === 'facebook' && <FacebookSvg size="20px" />}
                    {item.name === 'tiktok' && <AiFillTikTok className="w-[20px] text-xl" />}
                    {item.name === 'shopee' && <ShopeeSvg size="20px" />}
                    {item.name === 'lazada' && (
                      <div className="w-[20px] aspect-[1/1] flex justify-center">
                        <img src={Lazada} alt="Lazada" width={10} height={10} className="w-4 h-4" />
                      </div>
                    )}
                    {item.name === 'tokopedia' && (
                      <div className="w-[20px] aspect-[1/1] flex justify-center">
                        <img
                          src={Tokopedia}
                          alt="Tokopedia"
                          width={10}
                          height={10}
                          className="w-4 h-auto"
                        />
                      </div>
                    )}

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-primary-color"
                    >
                      {item.user}
                    </a>
                  </div>
                ))
              ) : (
                <p className="m-4 italic text-sm text-slate-500">Tidak ada media sosial tersedia</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">Contact :</h2>
            <div className="mt-2 space-y-2">
              {data.phone && (
                <div className="flex gap-2 items-center">
                  <FiPhone className="w-[20px]" />
                  <p className="text-base">{data.phone}</p>
                </div>
              )}
              {data.whatsapp && (
                <div className="flex gap-2 items-center">
                  <WhatsappSvg size="20px" />
                  <p className="text-base">{data.whatsapp}</p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">Alamat :</h2>
            <div className="space-y-2 mt-2">
              {data.adress && (
                <div className="flex gap-2 items-center">
                  <FaRoad className="w-[20px] text-sm" />
                  <p className="text-base">{data.adress}</p>
                </div>
              )}
              {data.googleMaps && (
                <div className="flex gap-2 items-center">
                  <div className="w-[25px] -ml-1">
                    <GoogleMapsSvg size="25px" />
                  </div>
                  <a
                    href={data.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:underline hover:text-primary-color"
                  >
                    Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
