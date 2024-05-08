import { Button } from '@/app/ui/button';
import Pagination from '@/app/ui/invoices/pagination';
import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className="h-full w-full items-center justify-center bg-white p-5">
      <div className="flex h-28 w-auto flex-row justify-between">
        <div className="h-12 items-center justify-center">
          <label
            htmlFor="customer"
            className="mb-2 block text-sm font-bold uppercase"
          >
            agen / cabang
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Pilih agen / cabang
              </option>
              <option value="ADIWERNA DLI AGEN">ADIWERNA DLI AGEN</option>

              <option value="AJIBARANG DLI AGEN">AJIBARANG DLI AGEN</option>

              <option value="AMBARAWA DLI AGEN">AMBARAWA DLI AGEN</option>

              <option value="ASAHAN DLI AGEN">ASAHAN DLI AGEN</option>

              <option value="BALIKPAPAN DLI AGEN">BALIKPAPAN DLI AGEN</option>

              <option value="BANDA ACEH DLI AGEN">BANDA ACEH DLI AGEN</option>

              <option value="BANDAR JAYA DLI AGEN">BANDAR JAYA DLI AGEN</option>

              <option value="BANDAR LAMPUNG DLI AGEN">
                BANDAR LAMPUNG DLI AGEN
              </option>

              <option value="BANDUNG DLI AGEN">BANDUNG DLI AGEN</option>

              <option value="BANJAR PATROMAN DLI AGEN">
                BANJAR PATROMAN DLI AGEN
              </option>

              <option value="BANJARBARU DLI AGEN">BANJARBARU DLI AGEN</option>

              <option value="BANJARMASIN DLI AGEN">BANJARMASIN DLI AGEN</option>

              <option value="BANJARNEGARA DLI AGEN">
                BANJARNEGARA DLI AGEN
              </option>

              <option value="BANTUL JOGJA DLI AGEN">
                BANTUL JOGJA DLI AGEN
              </option>

              <option value="BANYUMANIK DLI AGEN">BANYUMANIK DLI AGEN</option>

              <option value="BANYUWANGI DLI AGEN">BANYUWANGI DLI AGEN</option>

              <option value="BATAM DLI AGEN">BATAM DLI AGEN</option>

              <option value="BATU CEPER DLI AGEN">BATU CEPER DLI AGEN</option>

              <option value="BATURAJA SUMSEL DLI AGEN">
                BATURAJA SUMSEL DLI AGEN
              </option>

              <option value="BEJI DEPOK DLI AGEN">BEJI DEPOK DLI AGEN</option>

              <option value="BEKASI DLI COUNTER">BEKASI DLI COUNTER</option>

              <option value="BELILAS DLI AGEN">BELILAS DLI AGEN</option>

              <option value="BENGKULU DLI AGEN">BENGKULU DLI AGEN</option>

              <option value="BENGKULU SELATAN DLI AGEN">
                BENGKULU SELATAN DLI AGEN
              </option>

              <option value="BETENG DLI AGEN">BETENG DLI AGEN</option>

              <option value="BLITAR JATIM DLI AGEN">
                BLITAR JATIM DLI AGEN
              </option>

              <option value="BLORA DLI AGEN">BLORA DLI AGEN</option>

              <option value="BOGOR DLI AGEN">BOGOR DLI AGEN</option>

              <option value="BOJONEGORO DLI AGEN">BOJONEGORO DLI AGEN</option>

              <option value="BONDOWOSO DLI AGEN">BONDOWOSO DLI AGEN</option>

              <option value="BONTANG DLI AGEN">BONTANG DLI AGEN</option>

              <option value="BUKIT BARISAN DLI AGEN">
                BUKIT BARISAN DLI AGEN
              </option>

              <option value="BUKITTINGGI DLI AGEN">BUKITTINGGI DLI AGEN</option>

              <option value="CANDI DLI AGEN">CANDI DLI AGEN</option>

              <option value="CANDIREJO DLI AGEN">CANDIREJO DLI AGEN</option>

              <option value="CARINGIN DLI AGEN">CARINGIN DLI AGEN</option>

              <option value="CIAMIS DLI AGEN">CIAMIS DLI AGEN</option>

              <option value="CIANJUR DLI AGEN">CIANJUR DLI AGEN</option>

              <option value="CIKANDE DLI AGEN">CIKANDE DLI AGEN</option>

              <option value="CILACAP DLI AGEN">CILACAP DLI AGEN</option>

              <option value="CILEDUG CIREBON DLI AGEN">
                CILEDUG CIREBON DLI AGEN
              </option>

              <option value="CILEGON DLI AGEN">CILEGON DLI AGEN</option>

              <option value="CILEUNGSI DLI AGEN">CILEUNGSI DLI AGEN</option>

              <option value="CIPACING RANCAEKEK DLI AGEN">
                CIPACING RANCAEKEK DLI AGEN
              </option>

              <option value="CIPONDOH DLI AGEN">CIPONDOH DLI AGEN</option>

              <option value="CIREBON DLI AGEN">CIREBON DLI AGEN</option>

              <option value="CISOKA DLI AGEN">CISOKA DLI AGEN</option>

              <option value="COLOMADU DLI AGEN">COLOMADU DLI AGEN</option>

              <option value="DAMPIT DLI AGEN">DAMPIT DLI AGEN</option>

              <option value="DEMAK COUNTER">DEMAK COUNTER</option>

              <option value="DEMAK DLI AGEN">DEMAK DLI AGEN</option>

              <option value="DENPASAR DLI AGEN">DENPASAR DLI AGEN</option>

              <option value="DEPOK DLI AGEN">DEPOK DLI AGEN</option>

              <option value="DIV KHUSUS TRANSIT JATIASIH DBS">
                DIV KHUSUS TRANSIT JATIASIH DBS
              </option>

              <option value="DLI BALIKPAPAN">DLI BALIKPAPAN</option>

              <option value="DLI BANDUNG">DLI BANDUNG</option>

              <option value="DLI BANGKALAN">DLI BANGKALAN</option>

              <option value="DLI BANJARMASIN">DLI BANJARMASIN</option>

              <option value="DLI BANYUWANGI">DLI BANYUWANGI</option>

              <option value="DLI CIANJUR">DLI CIANJUR</option>

              <option value="DLI DAAN MOGOT COUNTER">
                DLI DAAN MOGOT COUNTER
              </option>

              <option value="DLI DENPASAR">DLI DENPASAR</option>

              <option value="DLI GARUT">DLI GARUT</option>

              <option value="DLI JAMBI">DLI JAMBI</option>

              <option value="DLI JAYAPURA">DLI JAYAPURA</option>

              <option value="DLI JEMBER">DLI JEMBER</option>

              <option value="DLI KARANGANYAR">DLI KARANGANYAR</option>

              <option value="DLI LAMPUNG">DLI LAMPUNG</option>

              <option value="DLI PADANG">DLI PADANG</option>

              <option value="DLI PEKALONGAN">DLI PEKALONGAN</option>

              <option value="DLI PEKANBARU">DLI PEKANBARU</option>

              <option value="DLI PHAPROS COUNTER">DLI PHAPROS COUNTER</option>

              <option value="DLI PUSAT">DLI PUSAT</option>

              <option value="DLI SALATIGA">DLI SALATIGA</option>

              <option value="DLI SAMARINDA">DLI SAMARINDA</option>

              <option value="DLI SEMARANG">DLI SEMARANG</option>

              <option value="DLI SURABAYA">DLI SURABAYA</option>

              <option value="DLI TANGSEL">DLI TANGSEL</option>

              <option value="DLI TEGAL">DLI TEGAL</option>

              <option value="DLI YOGYAKARTA">DLI YOGYAKARTA</option>

              <option value="DUKUH GEMOL DLI AGEN">DUKUH GEMOL DLI AGEN</option>

              <option value="DURI DLI AGEN">DURI DLI AGEN</option>

              <option value="ELLI SUKMAJAYA  DLI AGEN">
                ELLI SUKMAJAYA DLI AGEN
              </option>

              <option value="FATMAWATI DLI AGEN">FATMAWATI DLI AGEN</option>

              <option value="GADANG DLI AGEN">GADANG DLI AGEN</option>

              <option value="GADINGMANGU DLI AGEN">GADINGMANGU DLI AGEN</option>

              <option value="GARUT DLI AGEN">GARUT DLI AGEN</option>

              <option value="GEMOLONG COUNTER">GEMOLONG COUNTER</option>

              <option value="GENTENG DLI AGEN">GENTENG DLI AGEN</option>

              <option value="GOMBONG DLI AGEN">GOMBONG DLI AGEN</option>

              <option value="GORONTALO DLI AGEN">GORONTALO DLI AGEN</option>

              <option value="GRAHA RAYA  DLI AGEN">GRAHA RAYA DLI AGEN</option>

              <option value="GREGED CIREBON  DLI AGEN">
                GREGED CIREBON DLI AGEN
              </option>

              <option value="GRESIK DLI AGEN">GRESIK DLI AGEN</option>

              <option value="GRIBIG MALANG DLI AGEN">
                GRIBIG MALANG DLI AGEN
              </option>

              <option value="GUNUNG KIDUL DLI AGEN">
                GUNUNG KIDUL DLI AGEN
              </option>

              <option value="HAMPOR GARUT DLI AGEN">
                HAMPOR GARUT DLI AGEN
              </option>

              <option value="IMAM BONJOL COUNTER">IMAM BONJOL COUNTER</option>

              <option value="INDRAMAYU  DLI AGEN">INDRAMAYU DLI AGEN</option>

              <option value="JAMBI DLI AGEN">JAMBI DLI AGEN</option>

              <option value="JATEN KARANGANYAR DLI AGEN">
                JATEN KARANGANYAR DLI AGEN
              </option>

              <option value="JEMBER DLI AGEN">JEMBER DLI AGEN</option>

              <option value="JEPARA DLI AGEN">JEPARA DLI AGEN</option>

              <option value="JOMBANG DLI AGEN">JOMBANG DLI AGEN</option>

              <option value="JONGGOL DLI AGEN">JONGGOL DLI AGEN</option>

              <option value="JUWANA DLI AGEN">JUWANA DLI AGEN</option>

              <option value="JUWIRING KLATEN DLI AGEN">
                JUWIRING KLATEN DLI AGEN
              </option>

              <option value="KALIANDA DLI AGEN">KALIANDA DLI AGEN</option>

              <option value="KARANGANYAR DLI AGEN">KARANGANYAR DLI AGEN</option>

              <option value="KATAMSO DLI AGEN">KATAMSO DLI AGEN</option>

              <option value="KATAPANG  DLI AGEN">KATAPANG DLI AGEN</option>

              <option value="KEBUMEN DLI AGEN">KEBUMEN DLI AGEN</option>

              <option value="KEDIRI KOTA  DLI AGEN">
                KEDIRI KOTA DLI AGEN
              </option>

              <option value="KEDUNG COWEK 1 DLI AGEN">
                KEDUNG COWEK 1 DLI AGEN
              </option>

              <option value="KEMANG KAHURIPAN DLI AGEN">
                KEMANG KAHURIPAN DLI AGEN
              </option>

              <option value="KEMASAN KRIAN DLI AGEN">
                KEMASAN KRIAN DLI AGEN
              </option>

              <option value="KENDAL DLI AGEN">KENDAL DLI AGEN</option>

              <option value="KENDARI DLI AGEN">KENDARI DLI AGEN</option>

              <option value="KEPAHIANG DLI AGEN">KEPAHIANG DLI AGEN</option>

              <option value="KERTAJATI MAJALENGKA  DLI AGEN">
                KERTAJATI MAJALENGKA DLI AGEN
              </option>

              <option value="KETINTANG DLI AGEN">KETINTANG DLI AGEN</option>

              <option value="KISARINO  DLI AGEN">KISARINO DLI AGEN</option>

              <option value="KLAMPIS DLI AGEN">KLAMPIS DLI AGEN</option>

              <option value="KLATEN DLI AGEN">KLATEN DLI AGEN</option>

              <option value="KOTA AGUNG DLI AGEN">KOTA AGUNG DLI AGEN</option>

              <option value="KOTA BUMI DLI AGEN">KOTA BUMI DLI AGEN</option>

              <option value="KOTA WISATA DLI AGEN">KOTA WISATA DLI AGEN</option>

              <option value="KRANGGAN MOJOKERTO DLI AGEN">
                KRANGGAN MOJOKERTO DLI AGEN
              </option>

              <option value="KUDUS DLI AGEN">KUDUS DLI AGEN</option>

              <option value="KUPANG DLI AGEN">KUPANG DLI AGEN</option>

              <option value="KYAI TELINGSING DLI AGEN">
                KYAI TELINGSING DLI AGEN
              </option>

              <option value="LAMONGAN DLI AGEN">LAMONGAN DLI AGEN</option>

              <option value="LAMPUNG TIMUR DLI AGEN">
                LAMPUNG TIMUR DLI AGEN
              </option>

              <option value="LEGOK DLI AGEN">LEGOK DLI AGEN</option>

              <option value="LHOKSEUMAWE DLI AGEN">LHOKSEUMAWE DLI AGEN</option>

              <option value="LIMA PULUH KOTA  DLI AGEN">
                LIMA PULUH KOTA DLI AGEN
              </option>

              <option value="LUBUK LINGGAU DLI AGEN">
                LUBUK LINGGAU DLI AGEN
              </option>

              <option value="LUMAJANG DLI AGEN">LUMAJANG DLI AGEN</option>

              <option value="MADIUN DLI AGEN">MADIUN DLI AGEN</option>

              <option value="MAGELANG  DLI AGEN">MAGELANG DLI AGEN</option>

              <option value="MAKASSAR DLI AGEN">MAKASSAR DLI AGEN</option>

              <option value="MALANG DLI AGEN">MALANG DLI AGEN</option>

              <option value="MANADO DLI AGEN">MANADO DLI AGEN</option>

              <option value="MARTAPURA DLI AGEN">MARTAPURA DLI AGEN</option>

              <option value="MATARAM DLI AGEN">MATARAM DLI AGEN</option>

              <option value="MEDAN DLI AGEN">MEDAN DLI AGEN</option>

              <option value="MEDAN SUNGGAL DLI AGEN">
                MEDAN SUNGGAL DLI AGEN
              </option>

              <option value="MOJOKERTO DLI AGEN">MOJOKERTO DLI AGEN</option>

              <option value="MT HARYONO DLI AGEN">MT HARYONO DLI AGEN</option>

              <option value="NGANJUK DLI AGEN">NGANJUK DLI AGEN</option>

              <option value="PADANG DLI AGEN">PADANG DLI AGEN</option>

              <option value="PALEMBANG DLI AGEN">PALEMBANG DLI AGEN</option>

              <option value="PALU DLI AGEN">PALU DLI AGEN</option>

              <option value="PAMANUKAN DLI AGEN">PAMANUKAN DLI AGEN</option>

              <option value="PAMEUNTASAN DLI AGEN">PAMEUNTASAN DLI AGEN</option>

              <option value="PAMULANG DLI AGEN">PAMULANG DLI AGEN</option>

              <option value="PANDEGILING DLI AGEN">PANDEGILING DLI AGEN</option>

              <option value="PANGANDARAN DLI AGEN">PANGANDARAN DLI AGEN</option>

              <option value="PANGKAL PINANG DLI AGEN">
                PANGKAL PINANG DLI AGEN
              </option>

              <option value="PANGKALAN KERINCI DLI AGEN">
                PANGKALAN KERINCI DLI AGEN
              </option>

              <option value="PANGKALANBUN DLI AGEN">
                PANGKALANBUN DLI AGEN
              </option>

              <option value="PARADISO GARDEN DLI AGEN">
                PARADISO GARDEN DLI AGEN
              </option>

              <option value="PARAKAN DLI AGEN">PARAKAN DLI AGEN</option>

              <option value="PARE DLI AGEN">PARE DLI AGEN</option>

              <option value="PASAR BARU DLI AGEN">PASAR BARU DLI AGEN</option>

              <option value="PASAR III KRAKATAU DLI AGEN">
                PASAR III KRAKATAU DLI AGEN
              </option>

              <option value="PASAR KEMIS DLI AGEN">PASAR KEMIS DLI AGEN</option>

              <option value="PASURUAN DLI AGEN">PASURUAN DLI AGEN</option>

              <option value="PATI DLI AGEN">PATI DLI AGEN</option>

              <option value="PCI DLI AGEN">PCI DLI AGEN</option>

              <option value="PDLABU DLI AGEN">PDLABU DLI AGEN</option>

              <option value="PECANGAAN DLI AGEN">PECANGAAN DLI AGEN</option>

              <option value="PEKALONGAN DLI AGEN">PEKALONGAN DLI AGEN</option>

              <option value="PEKANBARU DLI AGEN">PEKANBARU DLI AGEN</option>

              <option value="PEMALANG DLI AGEN">PEMALANG DLI AGEN</option>

              <option value="PERMATA BDO DLI AGEN">PERMATA BDO DLI AGEN</option>

              <option value="PERUMNAS KARAWANG DLI AGEN">
                PERUMNAS KARAWANG DLI AGEN
              </option>

              <option value="PESAWARAN DLI AGEN">PESAWARAN DLI AGEN</option>

              <option value="PINARAK DLI AGEN">PINARAK DLI AGEN</option>

              <option value="POGUNG JOGJA DLI AGEN">
                POGUNG JOGJA DLI AGEN
              </option>

              <option value="PONTIANAK DLI AGEN">PONTIANAK DLI AGEN</option>

              <option value="POOL JATILUHUR">POOL JATILUHUR</option>

              <option value="PRABUMULIH DLI AGEN">PRABUMULIH DLI AGEN</option>

              <option value="PRAMBANAN DLI AGEN">PRAMBANAN DLI AGEN</option>

              <option value="PRAMBATAN DLI AGEN">PRAMBATAN DLI AGEN</option>

              <option value="PRINGSEWU DLI AGEN">PRINGSEWU DLI AGEN</option>

              <option value="PURBALINGGA DLI AGEN">PURBALINGGA DLI AGEN</option>

              <option value="PURWAKARTA DLI AGEN">PURWAKARTA DLI AGEN</option>

              <option value="PURWODADI DLI AGEN">PURWODADI DLI AGEN</option>

              <option value="PURWOKERTO DLI AGEN">PURWOKERTO DLI AGEN</option>

              <option value="PURWOREJO DLI AGEN">PURWOREJO DLI AGEN</option>

              <option value="PUSPONJOLO DLI AGEN">PUSPONJOLO DLI AGEN</option>

              <option value="RANTAU PRAPAT DLI AGEN">
                RANTAU PRAPAT DLI AGEN
              </option>

              <option value="RAYA BAKALAN DLI AGEN">
                RAYA BAKALAN DLI AGEN
              </option>

              <option value="REJANG LEBONG DLI AGEN">
                REJANG LEBONG DLI AGEN
              </option>

              <option value="RUNGKUT DLI AGEN">RUNGKUT DLI AGEN</option>

              <option value="SADANG DLI AGEN">SADANG DLI AGEN</option>

              <option value="SAKAH GIANYAR DLI AGEN">
                SAKAH GIANYAR DLI AGEN
              </option>

              <option value="SAKOKENTEN PLM DLI AGEN">
                SAKOKENTEN PLM DLI AGEN
              </option>

              <option value="SALATIGA DLI AGEN">SALATIGA DLI AGEN</option>

              <option value="SAMARINDA DLI AGEN">SAMARINDA DLI AGEN</option>

              <option value="SARI ANYAR DLI AGEN">SARI ANYAR DLI AGEN</option>

              <option value="SARWAJALA DLI AGEN">SARWAJALA DLI AGEN</option>

              <option value="SAWANGAN DLI AGEN">SAWANGAN DLI AGEN</option>

              <option value="SECANG DLI AGEN">SECANG DLI AGEN</option>

              <option value="SENAPELAN RIAU DLI AGEN">
                SENAPELAN RIAU DLI AGEN
              </option>

              <option value="SERANG DLI AGEN">SERANG DLI AGEN</option>

              <option value="SIDAREJA DLI AGEN">SIDAREJA DLI AGEN</option>

              <option value="SINGKAWANG DLI AGEN">SINGKAWANG DLI AGEN</option>

              <option value="SLEMAN DLI AGEN">SLEMAN DLI AGEN</option>

              <option value="SOLO DLI AGEN">SOLO DLI AGEN</option>

              <option value="SOLOK DLI AGEN">SOLOK DLI AGEN</option>

              <option value="SUBANG DLI AGEN">SUBANG DLI AGEN</option>

              <option value="SUKABUMI DLI AGEN">SUKABUMI DLI AGEN</option>

              <option value="SUKAHATI DLI AGEN">SUKAHATI DLI AGEN</option>

              <option value="SUKASARI BOGOR DLI AGEN">
                SUKASARI BOGOR DLI AGEN
              </option>

              <option value="SULAIMAN DLI AGEN">SULAIMAN DLI AGEN</option>

              <option value="SUMEDANG  DLI AGEN">SUMEDANG DLI AGEN</option>

              <option value="SUMENEP DLI AGEN">SUMENEP DLI AGEN</option>

              <option value="SUPENO DLI AGEN">SUPENO DLI AGEN</option>

              <option value="TAMAN TEKNO ASPERINDO DLI AGEN">
                TAMAN TEKNO ASPERINDO DLI AGEN
              </option>

              <option value="TANAH TINGGI DLI AGEN">
                TANAH TINGGI DLI AGEN
              </option>

              <option value="TANDES DLI AGEN">TANDES DLI AGEN</option>

              <option value="TANGERANG DLI AGEN">TANGERANG DLI AGEN</option>

              <option value="TANGSEL DLI AGEN">TANGSEL DLI AGEN</option>

              <option value="TASIKMALAYA DLI AGEN">TASIKMALAYA DLI AGEN</option>

              <option value="TEGAL DLI AGEN">TEGAL DLI AGEN</option>

              <option value="TEGAL GUBUK DLI AGEN">TEGAL GUBUK DLI AGEN</option>

              <option value="TEMBOKREJO PASURUAN DLI AGEN">
                TEMBOKREJO PASURUAN DLI AGEN
              </option>

              <option value="TIRTO PEKALONGAN DLI AGEN">
                TIRTO PEKALONGAN DLI AGEN
              </option>

              <option value="TRIDADI DLI AGEN">TRIDADI DLI AGEN</option>

              <option value="TULUNGAGUNG DLI AGEN">TULUNGAGUNG DLI AGEN</option>

              <option value="WANAHERANG DLI AGEN">WANAHERANG DLI AGEN</option>

              <option value="WELAHAN DLI AGEN">WELAHAN DLI AGEN</option>

              <option value="WIYUNG DLI AGEN">WIYUNG DLI AGEN</option>

              <option value="WONOGIRI DLI AGEN">WONOGIRI DLI AGEN</option>

              <option value="WONOSOBO DLI AGEN">WONOSOBO DLI AGEN</option>

              <option value="XXXKARANGANYAR COUNTERXXX">
                XXXKARANGANYAR COUNTERXXX
              </option>

              <option value="YOGYAKARTA DLI AGEN">YOGYAKARTA DLI AGEN</option>
            </select>
          </div>
        </div>
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
        <div className="h-12 items-center justify-center">
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
                type="number"
                step="0.01"
                placeholder="Masukan Nama Customer"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-28 w-auto flex-row items-center justify-between">
        <Button className="bg-green-500">Refresh</Button>
        <Button className="bg-red-500">Keluar</Button>
      </div>
      <table className="mt-10 table min-w-full border-collapse border border-slate-400 text-gray-900">
        <thead className="rounded-lg bg-blue-500 text-left text-sm font-normal">
          <tr>
            <th
              scope="col"
              className="border border-slate-300 px-4 py-5 font-medium sm:pl-6"
            >
              Kode
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Nama
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
              Fax 1
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Fax 2
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Contact Person
            </th>
            <th
              scope="col"
              className="border border-slate-300 px-3 py-5 font-medium"
            >
              Aktif
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
          </tr>
        </tbody>
      </table>
      {/* <Pagination currentPage={1} totalPages={10} /> */}
    </div>
  );
}
