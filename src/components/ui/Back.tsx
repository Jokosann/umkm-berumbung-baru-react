import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

export default function Back() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-1 items-center cursor-pointer my-2 w-fit" onClick={() => navigate(-1)}>
      <IoArrowBackCircleOutline className="text-xl" /> <span className="-mt-[1px]">kembali</span>
    </div>
  );
}
