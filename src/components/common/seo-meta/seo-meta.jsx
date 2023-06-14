import Head from "next/head";

export default function SeoMeta({ title }) {
  return (
    <Head>
      <title>
        {title
          ? `${title} - Guruku | Temukan Guru Berkualitas yang Sesuai dengan Kebutuhan Anda`
          : "Guruku | Temukan Guru Berkualitas yang Sesuai dengan Kebutuhan Anda"}
      </title>
      <meta
        name="description"
        content="Kami menyediakan akses mudah untuk menemukan guru umum dan guru dengan keahlian khusus dalam mengajar murid dengan disabilitas. Dengan metode belajar online dan offline, kami membantu memenuhi kebutuhan pendidikan Anda dengan cara yang nyaman dan terpercaya."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/img/logo-guruku.ico" />
    </Head>
  );
}
