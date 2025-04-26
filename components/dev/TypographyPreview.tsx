export default function TypographyPreview() {
    const weights = [
      { label: "Thin", className: "font-thin " },
      { label: "ExtraLight", className: "font-extralight text-2xl" },
      { label: "Light", className: "font-light text-3xl" },
      { label: "Regular", className: "font-normal text-4xl " },
      { label: "Medium", className: "font-medium text-5xl" },
      { label: "SemiBold", className: "font-semibold text-6xl" },
      { label: "Bold", className: "font-bold text-7xl" },
      { label: "ExtraBold", className: "font-extrabold text-8xl" },
      { label: "Black", className: "font-black text-9xl" },
    ];
  
    return (
      <div className="p-10 space-y-6 font-poppins bg-gray-900 text-gray-300 mt-12">
        <h1 className="text-3xl font-bold text-primary">Typography Preview: Poppins</h1>
  
        {weights.map(({ label, className }) => (
          <div key={label} className="space-y-1">
            <p className={className}>EmoViral {label}</p>
          {/*  <p className={`${className} italic`}>emoviral {label} Italic</p> */}
          </div>
        ))}
      </div>
    );
  }