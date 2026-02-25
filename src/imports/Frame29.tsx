function Helper() {
  return (
    <div className="h-[462px] relative shrink-0 w-[192px]">
      <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f2f3ef] relative size-full">
      <div className="absolute content-stretch flex items-center left-0 top-[301px]">
        <Helper />
        <div className="content-stretch flex flex-col h-[462px] items-start justify-between p-[24px] relative shrink-0 w-[564px]">
          <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[450px] whitespace-pre-wrap">
            <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-full">
              <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full">Engineering Predictable Growth</p>
              <div className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[40px] w-full">
                <p className="mb-0">{`We don’t build ideas. `}</p>
                <p>We engineer businesses.</p>
              </div>
            </div>
            <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.333] not-italic relative shrink-0 text-[#70745a] text-[16px] w-[343px]">A Shift Labs transforma ideias, operações confusas ou produtos mal estruturados em negócios organizados, previsíveis e escaláveis.</p>
          </div>
          <div className="bg-[#101700] content-stretch flex items-center p-[16px] relative shrink-0">
            <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f3ef] text-[16px] text-center uppercase">conhecer mais</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[462px] items-center justify-center p-[24px] relative shrink-0 w-[564px]">
          <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="bg-white h-[430px] shrink-0 w-[532px]" />
        </div>
        <Helper />
      </div>
    </div>
  );
}