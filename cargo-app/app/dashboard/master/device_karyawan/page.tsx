import { Button } from '@/app/ui/button';
import Pagination from '@/app/ui/invoices/pagination';
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className="h-full w-full items-center justify-center bg-white p-5">
      <div className='h-20 w-full justify-center items-center border-b-2 border-green-500 mb-10'>
        <p className='text-green-500 font-bold text-xl md:text-4xl text-center uppercase'>master device karyawan</p>
      </div>
      <div className="flex mb-10 w-full md:w-[50%] flex-col justify-start">
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
        <div className="mt-12 h-12 items-center justify-center">
          <fieldset>
            <legend className="mb-2 block text-sm font-bold uppercase">
              karyawan
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="karyawanharian"
                    name="tipekaryawan"
                    type="radio"
                    value="karyawanharian"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="karyawanharian"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium uppercase text-white uppercase"
                  >
                    harian
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="karyawankontrak"
                    name="tipekaryawan"
                    type="radio"
                    value="karyawankontrak"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="paid"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium uppercase text-white uppercase"
                  >
                    kontrak/tetap
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full items-center md:h-28 md:flex-row md:justify-between">
        <div className='flex flex-col w-full md:flex-row items-center'>
        <Button className="bg-green-500 justify-center w-full md:w-20 capitalize">Refresh</Button>
        <Button className="bg-yellow-500 justify-center mt-2 w-full md:w-36 md:ml-5 md:mt-0 capitalize">WhatsApp Link</Button>
        <Button className="bg-gray-500 justify-center mt-2 w-full md:w-52 md:ml-5 md:mt-0 capitalize">Cetak Data Raw Absensi</Button>
        </div>
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
              imei1
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium uppercase"
            >
              imei2
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium uppercase"
            >
              simcard1
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium uppercase"
            >
              simcard2
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
