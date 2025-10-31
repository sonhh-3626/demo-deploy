interface Heading1Props {
  title: string;
}

export default function Heading1({title}: Heading1Props) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h1>
    </div>
  )
}
