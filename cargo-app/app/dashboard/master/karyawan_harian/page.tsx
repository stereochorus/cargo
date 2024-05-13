import { Button } from '@/app/ui/button';
import Pagination from '@/app/ui/invoices/pagination';
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className="h-full w-full items-center justify-center bg-white p-5">
      <div className='h-20 w-full justify-center items-center border-b-2 border-green-500 mb-10'>
        <p className='text-green-500 font-bold text-xl md:text-4xl text-center uppercase'>master karyawan harian</p>
      </div>
      <div className="flex mb-10 w-full flex-col justify-start">
        <div className="h-12 items-center justify-center">
          <label
            htmlFor="namakaryawan"
            className="mb-2 block text-sm font-bold uppercase"
          >
            nama karyawan
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="namakaryawan"
                name="namakaryawan"
                placeholder="Masukan Nama Karyawan"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center md:h-28 w-auto md:flex-row items-center md:justify-between">
        <Button className="bg-blue-500 w-full mt-2 md:mt-0 md:w-20 justify-center capitalize">Refresh</Button>
        <Button className="bg-red-500 w-full mt-2 md:mt-0 md:w-20 justify-center capitalize">Keluar</Button>
      </div>
      <div className='overflow-x-auto mt-5'>
      <table className="table min-w-full border-collapse border border-slate-400 text-gray-900">
        <thead className="rounded-lg bg-blue-500 text-left text-sm font-normal">
          <tr>
            <th
              scope="col"
              className="border border-slate-300 px-4 py-5 font-medium sm:pl-6 uppercase"
            >
              nip
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium uppercase"
            >
              nama
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium uppercase"
            >
              tanggal masuk
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium uppercase"
            >
              jabatan
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium uppercase"
            >
              area kerja
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr key="1" className="w-full">
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
            <Button className="bg-sky-500 w-full mt-2 md:mt-0 justify-center">453345345</Button>
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
          </tr>
          <tr
            key="2"
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
            <Button className="bg-sky-500 w-full mt-2 md:mt-0 justify-center">453345345</Button>
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
          </tr>
          <tr
            key="3"
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
            <Button className="bg-sky-500 w-full mt-2 md:mt-0 justify-center">453345345</Button>
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3 capitalize">
              contoh
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      {/* <Pagination currentPage={1} totalPages={10} /> */}
    </div>
  );
}
