import { Button } from '@/app/ui/button';
import Pagination from '@/app/ui/invoices/pagination';
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className="h-full w-full items-center justify-center bg-white p-5">
      <div className="flex h-28 w-auto flex-row justify-start">
        <div className="h-12 items-center justify-center">
          <fieldset>
            <legend className="mb-2 block text-sm font-bold uppercase">
              aktif
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input
                    id="pending"
                    name="status"
                    type="radio"
                    value="pending"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="pending"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium uppercase text-white"
                  >
                    ya
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="paid"
                    name="status"
                    type="radio"
                    value="paid"
                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  />
                  <label
                    htmlFor="paid"
                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium uppercase text-white"
                  >
                    tidak
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="pl-20 h-12 items-center justify-center">
          <label
            htmlFor="customername"
            className="mb-2 block text-sm font-bold font-medium uppercase"
          >
            Nama Customer
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="customername"
                name="customername"
                placeholder="Masukan Nama Customer"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-28 w-auto flex-row items-center justify-between">
        <div className='flex flex-row items-center justify-center'>
        <Button className="bg-green-500">Refresh</Button>
        <Button className="bg-blue-500 ml-5">Tambah</Button>
        </div>
        <Button className="bg-red-500">Keluar</Button>
      </div>
      <table className="mt-10 table min-w-full border-collapse border border-slate-400 text-gray-900">
        <thead className="rounded-lg bg-blue-500 text-left text-sm font-normal">
          <tr>
            <th
              scope="col"
              className="border border-slate-300 px-4 py-5 font-medium sm:pl-6"
            >
              Kode Agen
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Nama Agen
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Telp 1
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Telp 2
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Alamat
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Kota
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Penanggung Jawab
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Dibawah cabang/pusat
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Aktif
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Npwp
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr key="1" className="w-full">
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
          </tr>
          <tr
            key="2"
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
          </tr>
          <tr
            key="3"
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
          >
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
            <td className="whitespace-nowrap border border-slate-300 px-3 py-3">
              contoh
            </td>
          </tr>
        </tbody>
      </table>
      {/* <Pagination currentPage={1} totalPages={10} /> */}
    </div>
  );
}
