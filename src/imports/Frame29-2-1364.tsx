import clsx from "clsx";
import svgPaths from "./svg-62a33ahpad";
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute bg-[#f2f3ef] content-stretch flex h-[87px] items-end p-[16px] w-[188px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px]">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col h-[232px] items-start justify-end p-[24px] relative shrink-0 w-[315px]">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px] w-[207px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <div className={additionalClassNames}>
      <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return <Helper2 additionalClassNames={clsx("absolute h-[174px] top-[1880px] w-[192px]", additionalClassNames)} />;
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return <Helper2 additionalClassNames={clsx("relative shrink-0 w-[192px]", additionalClassNames)} />;
}

export default function Frame() {
  return (
    <div className="bg-[#f2f3ef] relative size-full">
      <div className="absolute content-stretch flex items-center left-0 top-[124px]">
        <Helper additionalClassNames="h-[462px]" />
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
        <Helper additionalClassNames="h-[462px]" />
      </div>
      <div className="absolute content-stretch flex flex-col h-[188px] items-start left-0 pb-[53px] pt-[48px] px-[192px] top-[586px] w-[1512px]">
        <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1128px]">
          <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-[405px] whitespace-pre-wrap">
            <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full">/Nosso Ecossistema</p>
            <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[24px] w-full">Plataformas e operações coordenadas pela mesma engenharia.</p>
          </div>
          <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
            <div className="h-[23.981px] relative shrink-0 w-[105.917px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.917 23.9812">
                <g id="Group 108">
                  <path d={svgPaths.p3b36b400} fill="var(--fill-0, #101700)" id="Vector" />
                  <path d={svgPaths.p3d25e5c0} fill="var(--fill-0, #101700)" id="Vector_2" />
                  <path d={svgPaths.p3f4cd840} fill="var(--fill-0, #101700)" id="Vector_3" />
                  <path d={svgPaths.p37b04500} fill="var(--fill-0, #101700)" id="Vector_4" />
                  <path d={svgPaths.p4eeca80} fill="var(--fill-0, #101700)" id="Vector_5" />
                  <path d={svgPaths.p2c063100} fill="var(--fill-0, #101700)" id="Vector_6" />
                  <path d={svgPaths.p1671f300} fill="var(--fill-0, #101700)" id="Vector_7" />
                  <path d={svgPaths.p2652e500} fill="var(--fill-0, #101700)" id="Vector_8" />
                  <path d={svgPaths.p3155d500} fill="var(--fill-0, #101700)" id="Vector_9" />
                </g>
              </svg>
            </div>
            <div className="h-[22.231px] relative shrink-0 w-[106px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 22.2306">
                <g id="Group 107">
                  <path d={svgPaths.p1e64ea00} fill="var(--fill-0, #101700)" id="Vector" />
                  <path d={svgPaths.p27389c0} fill="var(--fill-0, #101700)" id="Vector_2" />
                  <path d={svgPaths.p3cb0fc80} fill="var(--fill-0, #101700)" id="Vector_3" />
                  <path d={svgPaths.p2912eb80} fill="var(--fill-0, #101700)" id="Vector_4" />
                  <path d={svgPaths.pc669e00} fill="var(--fill-0, #101700)" id="Vector_5" />
                  <path d={svgPaths.p2dd74f00} fill="var(--fill-0, #101700)" id="Vector_6" />
                  <path d={svgPaths.p1d01bca2} fill="var(--fill-0, #101700)" id="Vector_7" />
                  <g id="Group 101">
                    <path d={svgPaths.p26c7aa00} fill="var(--fill-0, #101700)" id="Vector_8" />
                    <path d={svgPaths.p39abfc00} fill="var(--fill-0, #101700)" id="Vector_9" />
                    <path d={svgPaths.p21121400} fill="var(--fill-0, #101700)" id="Vector_10" />
                    <path d={svgPaths.p3b24a200} fill="var(--fill-0, #101700)" id="Vector_11" />
                    <path d={svgPaths.p2db6a700} fill="var(--fill-0, #101700)" id="Vector_12" />
                    <path d={svgPaths.p3876280} fill="var(--fill-0, #101700)" id="Vector_13" />
                    <path d={svgPaths.p1d723100} fill="var(--fill-0, #101700)" id="Vector_14" />
                    <path d={svgPaths.p21fc380} fill="var(--fill-0, #101700)" id="Vector_15" />
                    <path d={svgPaths.p9229f0} fill="var(--fill-0, #101700)" id="Vector_16" />
                    <path d={svgPaths.p14724e00} fill="var(--fill-0, #101700)" id="Vector_17" />
                    <path d={svgPaths.p31741800} fill="var(--fill-0, #101700)" id="Vector_18" />
                    <path d={svgPaths.p2ce23b80} fill="var(--fill-0, #101700)" id="Vector_19" />
                    <path d={svgPaths.p3776da80} fill="var(--fill-0, #101700)" id="Vector_20" />
                    <path d={svgPaths.p39f61a00} fill="var(--fill-0, #101700)" id="Vector_21" />
                    <path d={svgPaths.p34728800} fill="var(--fill-0, #101700)" id="Vector_22" />
                    <path d={svgPaths.p36086200} fill="var(--fill-0, #101700)" id="Vector_23" />
                    <path d={svgPaths.p1ab5dd80} fill="var(--fill-0, #101700)" id="Vector_24" />
                    <path d={svgPaths.pc55e400} fill="var(--fill-0, #101700)" id="Vector_25" />
                    <path d={svgPaths.p3ab7a000} fill="var(--fill-0, #101700)" id="Vector_26" />
                    <path d={svgPaths.p3caa8800} fill="var(--fill-0, #101700)" id="Vector_27" />
                    <path d={svgPaths.p2e250e00} fill="var(--fill-0, #101700)" id="Vector_28" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="col-1 h-[21.619px] ml-[29.18%] mt-0 relative row-1 w-[69.402px]" data-name="Group">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.4021 21.6191">
                  <g id="Group">
                    <path d={svgPaths.p2d9b6570} fill="var(--fill-0, #101700)" id="Vector" />
                    <path d={svgPaths.p3e637a00} fill="var(--fill-0, #101700)" id="Vector_2" />
                    <path d={svgPaths.p2f8f2700} fill="var(--fill-0, #101700)" id="Vector_3" />
                    <path d={svgPaths.p1e7d4000} fill="var(--fill-0, #101700)" id="Vector_4" />
                  </g>
                </svg>
              </div>
              <div className="col-1 h-[21.619px] ml-0 mt-0 relative row-1 w-[21.572px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5712 21.6191">
                  <g id="Group 1">
                    <path d={svgPaths.p2defb300} fill="var(--fill-0, #101700)" id="Vector" />
                    <g id="Group" opacity="0.25">
                      <path d={svgPaths.p8f5f100} fill="var(--fill-0, #101700)" id="Vector_2" />
                    </g>
                    <path d={svgPaths.p2f23def0} fill="var(--fill-0, #101700)" id="Vector_3" />
                    <path d={svgPaths.p24304000} fill="var(--fill-0, #101700)" id="Vector_4" />
                    <path d={svgPaths.p3276b9c0} fill="var(--fill-0, #101700)" id="Vector_5" />
                    <path d={svgPaths.p32481c00} fill="var(--fill-0, #101700)" id="Vector_6" />
                    <g id="Group_2" opacity="0.25">
                      <path d={svgPaths.p2eafb3a0} fill="var(--fill-0, #101700)" id="Vector_7" />
                    </g>
                    <path d={svgPaths.p23456b80} fill="var(--fill-0, #101700)" id="Vector_8" />
                    <g id="Group_3" opacity="0.25">
                      <path d={svgPaths.p3287a200} fill="var(--fill-0, #101700)" id="Vector_9" />
                    </g>
                    <path d={svgPaths.pbb69d00} fill="var(--fill-0, #101700)" id="Vector_10" />
                    <path d={svgPaths.p2b625980} fill="var(--fill-0, #101700)" id="Vector_11" />
                    <path d={svgPaths.p16d82e00} fill="var(--fill-0, #101700)" id="Vector_12" />
                    <path d={svgPaths.p22b42b00} fill="var(--fill-0, #101700)" id="Vector_13" />
                    <path d={svgPaths.p17843200} fill="var(--fill-0, #101700)" id="Vector_14" />
                    <path d={svgPaths.p3943ca80} fill="var(--fill-0, #101700)" id="Vector_15" />
                    <g id="Group_4" opacity="0.25">
                      <path d={svgPaths.p8587f00} fill="var(--fill-0, #101700)" id="Vector_16" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="h-[25px] relative shrink-0 w-[80px]" data-name="Camada_1">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 25">
                <g clipPath="url(#clip0_2_867)" id="Camada_1">
                  <path d={svgPaths.p21a87500} fill="var(--fill-0, #101700)" id="Vector" />
                  <g id="Group">
                    <path d={svgPaths.p785d100} fill="var(--fill-0, #101700)" id="Vector_2" />
                    <path d={svgPaths.p212e980} fill="var(--fill-0, #101700)" id="Vector_3" />
                    <path d={svgPaths.p198c0580} fill="var(--fill-0, #101700)" id="Vector_4" />
                    <path d={svgPaths.p22c540} fill="var(--fill-0, #101700)" id="Vector_5" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_2_867">
                    <rect fill="white" height="25" width="80" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[188px] items-start justify-center left-0 pb-[53px] pt-[48px] px-[192px] top-[774px] w-[1512px]">
        <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1030px] whitespace-pre-wrap">
          <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-[499px]">
            <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full">/problema</p>
            <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[40px] w-full">Crescer não é o problema. Crescer desorganizado é.</p>
          </div>
          <p className="font-['Inter_Display:Regular',sans-serif] leading-[102.2750015258789%] not-italic relative shrink-0 text-[#70745a] text-[16px] w-[335px]">A maioria das empresas cresce mais rápido do que sua própria estrutura consegue sustentar.</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[188px] items-end justify-center left-0 pb-[53px] pl-[192px] pr-[285px] pt-[48px] top-[1425px] w-[1512px]">
        <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[24px] w-[472px] whitespace-pre-wrap">O resultado não é visível no início. É fragmentação. E fragmentação não quebra no dia um. Ela corrói aos poucos empresas que “estavam indo bem”.</p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start justify-end left-0 pb-[36px] pt-[64px] px-[192px] top-[1613px] w-[1512px]">
        <div className="content-stretch flex gap-[46px] items-end justify-center relative shrink-0 whitespace-pre-wrap">
          <div className="content-stretch flex flex-col gap-[32px] items-start leading-[normal] relative shrink-0 w-[649px]">
            <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full">/The Shift Approach</p>
            <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[64px] w-full">From chaos to coordinated systems.</p>
          </div>
          <p className="font-['Inter_Display:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#70745a] text-[16px] w-[320px]">
            <span className="leading-[102.2750015258789%]">{`A Shift Labs não é `}</span>
            <span className="font-['Inter_Display:Medium',sans-serif] leading-[102.2750015258789%] text-[#101700]">{`agência. `}</span>
            <span className="leading-[102.2750015258789%]">{`Não é `}</span>
            <span className="font-['Inter_Display:Medium',sans-serif] leading-[102.2750015258789%] text-[#101700]">consultoria tradicional.</span>
            <span className="leading-[102.2750015258789%]">{` Não é `}</span>
            <span className="font-['Inter_Display:Medium',sans-serif] leading-[102.2750015258789%] text-[#101700]">software factory.</span>
          </p>
        </div>
      </div>
      <div className="absolute content-stretch flex items-start left-0 top-[962px]">
        <Helper additionalClassNames="h-[463px]" />
        <div className="content-start flex flex-wrap gap-[1px_0px] items-start relative shrink-0 w-[1128px]">
          <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]">
            <div aria-hidden="true" className="absolute border-[#d6dace] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
            <Text text="Produto evolui sem alinhamento com comercial." />
            <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Chasing_Goal">
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                    <div className="col-1 h-[20.493px] ml-[32.5%] mt-[86.8%] relative row-1 w-[42.849px]" data-name="Group">
                      <div className="absolute inset-[-1.22%_-0.58%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3494 20.9926">
                          <g id="Group">
                            <path d={svgPaths.p12c2fe00} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[64.73%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.09%] mt-[35.16%] place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[19.924px] ml-0 mt-0 relative row-1 w-[42.865px]" data-name="Group">
                            <div className="absolute inset-[-1.25%_-0.58%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3655 20.4245">
                                <g id="Group">
                                  <path d={svgPaths.p13212f00} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[6.38%] mt-[8.49%] place-items-start relative row-1" data-name="Group">
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                            <div className="col-1 h-[40.158px] ml-0 mt-0 relative row-1 w-[77.724px]" data-name="Group">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.7233 40.1583">
                                <g id="Group">
                                  <path d={svgPaths.p2798fc00} fill="var(--fill-0, #101700)" id="Vector" />
                                  <path d={svgPaths.p1a8f9800} fill="var(--fill-0, #101700)" id="Vector_2" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 h-[15.513px] ml-0 mt-0 relative row-1 w-[16.12px]" data-name="Vector">
                          <div className="absolute inset-[-1.61%_-1.55%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6202 16.0128">
                              <path d={svgPaths.p2ab800} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[9.851px] ml-[38.8px] mt-[5.58px] relative row-1 w-[4.196px]" data-name="Vector">
                          <div className="absolute inset-[-2.54%_-5.96%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.69586 10.351">
                              <path d={svgPaths.p27c55a40} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 h-[18.317px] ml-[7.36%] mt-[13.21%] relative row-1 w-[30.776px]" data-name="Group">
                        <div className="absolute inset-[-1.37%_-0.81%_-1.36%_-0.81%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.2761 18.8166">
                            <g id="Group">
                              <path d={svgPaths.pdb84a60} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[5.108px] ml-[17.08%] mt-[32.47%] relative row-1 w-[12.507px]" data-name="Group">
                        <div className="absolute inset-[-4.89%_-2%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0065 5.60776">
                            <g id="Group">
                              <path d={svgPaths.p359dfde0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[32.45%] mt-[76.89%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[15.529px] ml-0 mt-0 relative row-1 w-[42.925px]" data-name="Group">
                        <div className="absolute inset-[-1.61%_-0.58%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.4257 16.0288">
                            <g id="Group">
                              <path d={svgPaths.p22c44080} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              <path d={svgPaths.p34f63100} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[19.429px] ml-[14.22%] mt-[19.75%] relative row-1 w-[30.422px]" data-name="Group">
                        <div className="absolute inset-[-1.29%_-0.82%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.9222 19.929">
                            <g id="Group">
                              <path d={svgPaths.p38b9800} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              <path d="M22.4724 1.08684H22.458" id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[10.047px] ml-[33.02%] mt-[38.76%] relative row-1 w-[14.611px]" data-name="Group">
                        <div className="absolute inset-[-2.49%_-1.71%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1113 10.5473">
                            <g id="Group">
                              <path d={svgPaths.pd645a80} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[16.208px] ml-[68.36px] mt-[113.39px] relative row-1 w-[17.401px]" data-name="Vector">
                      <div className="absolute inset-[-1.54%_-1.44%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9005 16.7084">
                          <path d={svgPaths.p351be400} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[55.423px] ml-[61.22px] mt-[61.84px] relative row-1 w-[21.828px]" data-name="Vector">
                      <div className="absolute inset-[-0.45%_-1.15%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3279 55.923">
                          <path d={svgPaths.p244ab100} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[20.507px] ml-[19.64px] mt-[94.22px] relative row-1 w-[13.495px]" data-name="Vector">
                      <div className="absolute inset-[-1.22%_-1.85%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9946 21.0073">
                          <path d={svgPaths.p2803d780} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[35.128px] ml-[30.06px] mt-[67.38px] relative row-1 w-[32.223px]" data-name="Vector">
                      <div className="absolute inset-[-0.71%_-0.78%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.7229 35.6285">
                          <path d={svgPaths.p3eda37c0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[48.43%] mt-[11.86%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[26.42px] ml-0 mt-0 relative row-1 w-[13.322px]" data-name="Group">
                          <div className="absolute inset-[-0.95%_-1.88%_-0.95%_-1.87%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8222 26.9201">
                              <g id="Group">
                                <path d={svgPaths.p32fc5280} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[31.76%] mt-0 place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[69.295px] ml-0 mt-0 relative row-1 w-[29.559px]" data-name="Group">
                            <div className="absolute inset-[-0.36%_-0.85%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0585 69.7952">
                                <g id="Group">
                                  <path d={svgPaths.p2434d400} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p2ab0e6e0} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p3e8aa200} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p94f4540} id="Vector_4" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p2f39b80} id="Vector_5" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p3814c5f0} fill="var(--fill-0, #B4EB38)" id="Vector_6" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <g id="Vector_7">
                                    <path d={svgPaths.p23e6d080} fill="var(--fill-0, #B4EB38)" />
                                    <path d={svgPaths.p23e6d080} stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                  <g id="Group_2">
                                    <path d={svgPaths.p3751d780} id="Vector_8" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[28.65%] mt-[17.71%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[38.59%] mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[23.438px] ml-[0.1%] mt-0 relative row-1 w-[40.631px]" data-name="Group">
                            <div className="absolute inset-[-1.07%_-0.61%_-1.07%_-0.62%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.1313 23.9379">
                                <g id="Group">
                                  <path d={svgPaths.p11c44580} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[29.463px] ml-[37.44%] mt-[23.4%] relative row-1 w-[25.442px]" data-name="Group">
                            <div className="absolute inset-[-0.85%_-0.98%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9424 29.9634">
                                <g id="Group">
                                  <path d={svgPaths.p1a231100} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[24.021px] ml-0 mt-[37.53%] relative row-1 w-[15.221px]" data-name="Group">
                            <div className="absolute inset-[-1.04%_-1.64%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7212 24.521">
                                <g id="Group">
                                  <path d={svgPaths.p1436bd80} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 h-[7.652px] ml-[36.44%] mt-[59.62%] relative row-1 w-[10.309px]" data-name="Group">
                        <div className="absolute inset-[-3.27%_-2.43%_-3.27%_-2.42%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8089 8.15191">
                            <g id="Group">
                              <path d={svgPaths.p18347580} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[3.76%] place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[28.726px] ml-0 mt-0 relative row-1 w-[26.078px]" data-name="Group">
                          <div className="absolute inset-[-0.87%_-0.96%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5777 29.2263">
                              <g id="Group">
                                <path d={svgPaths.p336b4320} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p3dd7bd60} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p25ac6f80} fill="var(--fill-0, #D6DACE)" id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60.12%] mt-[27.78%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[10.162px] ml-[22.86%] mt-[26.61%] relative row-1 w-[7.073px]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.07364 10.162">
                          <g id="Group">
                            <path d={svgPaths.p38e11540} fill="var(--fill-0, #70745A)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <div className="col-1 h-[10.396px] ml-0 mt-[40.45%] relative row-1 w-[4.822px]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.82255 10.3958">
                          <g id="Group">
                            <path d={svgPaths.p93f9200} fill="var(--fill-0, #70745A)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <div className="col-1 h-[8.541px] ml-[61.69%] mt-[9.31%] relative row-1 w-[1.557px]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.55711 8.54118">
                          <g id="Group">
                            <path d={svgPaths.p389ef000} fill="var(--fill-0, #70745A)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <div className="col-1 h-[8.352px] ml-[76.12%] mt-0 relative row-1 w-[4.893px]" data-name="Group">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.89306 8.35189">
                          <g id="Group">
                            <path d={svgPaths.p23116ef0} fill="var(--fill-0, #70745A)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[69.22%] mt-[58.74%] place-items-start relative row-1">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[43.16%] place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[20.525px] ml-[0.13%] mt-[43.65%] relative row-1 w-[42.865px]" data-name="Group">
                          <div className="absolute inset-[-1.22%_-0.58%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3655 21.025">
                              <g id="Group">
                                <path d={svgPaths.p16f8000} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[29.561px] ml-0 mt-0 relative row-1 w-[42.996px]" data-name="Group">
                            <div className="absolute inset-[-0.85%_-0.58%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.4961 30.0612">
                                <g id="Group">
                                  <path d={svgPaths.p19039d80} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[19.601px] ml-[14.19%] mt-[16.84%] relative row-1 w-[30.77px]" data-name="Group">
                            <div className="absolute inset-[-1.28%_-0.81%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.2703 20.1011">
                                <g id="Group">
                                  <path d={svgPaths.p1c75c700} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 h-[42.432px] ml-[21.49px] mt-0 relative row-1 w-0" data-name="Vector">
                        <div className="absolute inset-[-0.59%_-0.25px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.5 42.9318">
                            <path d="M0.25 42.6818V0.25" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[24.679px] ml-[21.49px] mt-[1.54px] relative row-1 w-[15.815px]" data-name="Vector">
                        <div className="absolute inset-[-1.01%_-1.58%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3152 25.179">
                            <path d={svgPaths.p2e480c80} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]">
            <div aria-hidden="true" className="absolute border-[#d6dace] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
            <Text text="Marketing gera demanda que a operação não absorve." />
            <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Self_Esteem">
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                  <div className="col-1 h-[56.549px] ml-0 mt-[98.73px] relative row-1 w-[106.935px]" data-name="Vector">
                    <div className="absolute inset-[-0.44%_-0.23%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.435 57.0485">
                        <path d={svgPaths.p20b9a900} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 h-[51.599px] ml-[72.61px] mt-[96.95px] relative row-1 w-[33.143px]" data-name="Vector">
                    <div className="absolute inset-[-0.48%_-0.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.6433 52.099">
                        <path d={svgPaths.p8fd3300} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 h-[35.877px] ml-[65.38px] mt-[112.67px] relative row-1 w-[7.344px]" data-name="Vector">
                    <div className="absolute inset-[-0.7%_-3.4%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.84357 36.3765">
                        <path d={svgPaths.p36640780} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 h-[31.833px] ml-[16.03px] mt-[84px] relative row-1 w-[27.53px]" data-name="Vector">
                    <div className="absolute inset-[-0.79%_-0.91%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0304 32.3329">
                        <path d={svgPaths.pd2c4070} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 h-[36.055px] ml-[8.78px] mt-[79.77px] relative row-1 w-[7.344px]" data-name="Vector">
                    <div className="absolute inset-[-0.69%_-3.4%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.84367 36.5546">
                        <path d={svgPaths.p1c3c89c0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1.76%] mt-0 place-items-start relative row-1" data-name="Group">
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[41.34%] mt-0 place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[12.584px] ml-[39.03px] mt-[20.04px] relative row-1 w-[18.359px]" data-name="Vector">
                        <div className="absolute inset-[-1.99%_-1.36%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.859 13.0844">
                            <path d={svgPaths.p75c0180} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[50.612px] ml-[50.14px] mt-[34.79px] relative row-1 w-[18.01px]" data-name="Vector">
                        <div className="absolute inset-[-0.49%_-1.39%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5105 51.1123">
                            <path d={svgPaths.p29418500} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[42.767px] ml-[50.14px] mt-[40.65px] relative row-1 w-[12.64px]" data-name="Vector">
                          <div className="absolute inset-[-0.58%_-1.98%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1399 43.2673">
                              <path d={svgPaths.p2fd2f600} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[9.171px] ml-[39.03px] mt-[23.45px] relative row-1 w-[15.884px]" data-name="Vector">
                          <div className="absolute inset-[-2.73%_-1.57%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3843 9.67131">
                              <path d={svgPaths.p32c1af00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[11.313px] ml-[16.13px] mt-[0.06px] relative row-1 w-[13.893px]" data-name="Vector">
                            <div className="absolute inset-[-2.21%_-1.8%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3928 11.8128">
                                <path d={svgPaths.p1b55e5a0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[33.891px] ml-0 mt-[5.36px] relative row-1 w-[20.206px]" data-name="Vector">
                            <div className="absolute inset-[-0.74%_-1.24%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7058 34.3913">
                                <path d={svgPaths.p3d96000} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[8.892px] ml-[10.95px] mt-[5.36px] relative row-1 w-[9.257px]" data-name="Vector">
                            <div className="absolute inset-[-2.81%_-2.7%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.7565 9.39183">
                                <path d={svgPaths.p164ff700} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[27.918px] ml-[42.67px] mt-[51.16px] relative row-1 w-[6.066px]" data-name="Vector">
                            <div className="absolute inset-[-0.9%_-4.12%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5658 28.4185">
                                <path d={svgPaths.p3e9ca00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[5.228px] ml-[40.37px] mt-[32.46px] relative row-1 w-[7.023px]" data-name="Vector">
                            <div className="absolute inset-[-4.78%_-3.56%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.52315 5.72758">
                                <path d={svgPaths.pfc3d840} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[33.546px] ml-[12.75px] mt-[28.21px] relative row-1 w-[11.76px]" data-name="Vector">
                            <div className="absolute inset-[-0.75%_-2.13%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2595 34.0462">
                                <path d={svgPaths.p130c880} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.5%] mt-0 place-items-start relative row-1" data-name="Group">
                            <div className="col-1 h-[12.987px] ml-[2.27px] mt-0 relative row-1 w-[19.577px]" data-name="Vector">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5773 12.9869">
                                <path d={svgPaths.p22227a00} fill="var(--fill-0, #70745A)" id="Vector" />
                              </svg>
                            </div>
                            <div className="col-1 h-[7.392px] ml-[16.63px] mt-[13.76px] relative row-1 w-[7.602px]" data-name="Vector">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.60243 7.39186">
                                <path d={svgPaths.p106f4e80} fill="var(--fill-0, #70745A)" id="Vector" />
                              </svg>
                            </div>
                            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[15.67%] place-items-start relative row-1" data-name="Group">
                              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                                <div className="col-1 h-[19.913px] ml-0 mt-[60.21%] relative row-1 w-[6.833px]" data-name="Group">
                                  <div className="absolute inset-[-1.26%_-3.65%_-1.26%_-3.66%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33296 20.4128">
                                      <g id="Group">
                                        <g id="Group_2">
                                          <path d={svgPaths.p3c4260e0} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                        </g>
                                        <path d={svgPaths.p16d317c0} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.63%] mt-[49.82%] place-items-start relative row-1" data-name="Group">
                                  <div className="col-1 h-[6.497px] ml-0 mt-0 relative row-1 w-[6.084px]" data-name="Group">
                                    <div className="absolute inset-[-3.85%_-4.11%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.58438 6.9972">
                                        <g id="Group">
                                          <path d={svgPaths.p2ab69200} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-1 h-[5.451px] ml-[18.2px] mt-[15.11px] relative row-1 w-[0.938px]" data-name="Vector">
                                  <div className="absolute inset-[-4.59%_-26.65%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.43826 5.9511">
                                      <path d={svgPaths.p1bb6fe80} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="col-1 h-[8.169px] ml-[2.06px] mt-[18.65px] relative row-1 w-[5.513px]" data-name="Vector">
                                  <div className="absolute inset-[-3.06%_-4.53%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01316 8.66913">
                                      <path d={svgPaths.p3cfd1400} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="col-1 h-[19.782px] ml-[2.64px] mt-0 relative row-1 w-[19.563px]" data-name="Vector">
                                  <div className="absolute inset-[-1.26%_-1.28%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0629 20.2823">
                                      <path d={svgPaths.p27018080} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="col-1 h-[10.117px] ml-[7.02px] mt-[20.19px] relative row-1 w-[12.845px]" data-name="Vector">
                                  <div className="absolute inset-[-2.47%_-1.95%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.345 10.6166">
                                      <path d={svgPaths.p353fae00} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="col-1 h-[10.117px] ml-[7.02px] mt-[20.19px] relative row-1 w-[12.845px]" data-name="Vector">
                                  <div className="absolute inset-[-2.47%_-1.95%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3449 10.6166">
                                      <path d={svgPaths.p28e35b00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-1 h-[14.514px] ml-[36.17px] mt-[3.05px] relative row-1 w-[14.041px]" data-name="Vector">
                            <div className="absolute inset-[-1.72%_-1.78%_-1.73%_-1.78%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5412 15.0151">
                                <path d={svgPaths.p38d91500} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[1.929px] ml-[39.98px] mt-[4.78px] relative row-1 w-[2.085px]" data-name="Vector">
                            <div className="absolute inset-[-12.96%_-11.99%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.58559 2.42899">
                                <path d={svgPaths.p17c34180} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[1.826px] ml-[38.21px] mt-[6.26px] relative row-1 w-[2.025px]" data-name="Vector">
                            <div className="absolute inset-[-13.7%_-12.35%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.52496 2.32572">
                                <path d={svgPaths.p213ebf00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[39.284px] ml-[42.53px] mt-[12.48px] relative row-1 w-[24.695px]" data-name="Vector">
                            <div className="absolute inset-[-0.64%_-1.01%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.1948 39.7838">
                                <path d={svgPaths.p2981f980} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[9.208px] ml-[44.91px] mt-[12.49px] relative row-1 w-[10.234px]" data-name="Vector">
                            <div className="absolute inset-[-2.71%_-2.44%_-2.72%_-2.44%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7336 9.70763">
                                <path d={svgPaths.p3b22a500} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.01%] mt-[60%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[46.586px] ml-0 mt-0 relative row-1 w-[107.337px]" data-name="Group">
                          <div className="absolute inset-[-0.54%_-0.23%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.836 47.0857">
                              <g id="Group">
                                <path d={svgPaths.pcb1f100} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                <path d={svgPaths.p26265200} fill="var(--fill-0, #70745A)" id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p2c377500} fill="var(--fill-0, #70745A)" id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p151c7f80} fill="var(--fill-0, #101700)" id="Vector_4" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[62.226px] ml-0 mt-[48.2px] relative row-1 w-[107.34px]" data-name="Vector">
                      <div className="absolute inset-[-0.4%_-0.23%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.84 62.7262">
                          <path d={svgPaths.p6a09500} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.26%] mt-[41.03%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[46.064px] ml-0 mt-0 relative row-1 w-[60.606px]" data-name="Group">
                          <div className="absolute inset-[-0.54%_-0.41%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.1046 46.564">
                              <g id="Group">
                                <path d={svgPaths.p3eb3fb00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <g id="Group_2">
                                  <path d={svgPaths.p3dc1e680} fill="var(--fill-0, #B4EB38)" id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                                <g id="Group_3">
                                  <path d={svgPaths.p366b5380} fill="var(--fill-0, #101700)" id="Vector_3" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                                <g id="Group_4">
                                  <path d={svgPaths.pda02600} fill="var(--fill-0, #D6DACE)" id="Vector_4" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                                <g id="Group_5">
                                  <path d={svgPaths.p2d174300} fill="var(--fill-0, #70745A)" id="Vector_5" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p33cce000} fill="var(--fill-0, #70745A)" id="Vector_6" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                                <g id="Group_6">
                                  <path d={svgPaths.p30e6b100} id="Vector_7" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[24.44%] mt-[59.06%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[6.796px] ml-[0.01%] mt-0 relative row-1 w-[5.221px]" data-name="Group">
                        <div className="absolute inset-[-3.68%_-4.78%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.72067 7.29679">
                            <g id="Group">
                              <path d={svgPaths.p18f72600} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.p1db1de52} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]">
            <div aria-hidden="true" className="absolute border-[#d6dace] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
            <div className="content-stretch flex flex-col h-[232px] items-start justify-end p-[24px] relative shrink-0 w-[315px]">
              <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px] w-[225px] whitespace-pre-wrap">Tecnologia acumula decisões sem arquitetura clara.</p>
            </div>
            <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Confusion">
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.12%] mt-[36.69%] place-items-start relative row-1" data-name="Group">
                    <div className="col-1 h-[14.692px] ml-[38.89%] mt-[11.7%] relative row-1 w-[23.139px]" data-name="Group">
                      <div className="absolute inset-[-1.7%_-1.08%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6393 15.1919">
                          <g id="Group">
                            <path d={svgPaths.p20925380} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[9.633px] ml-[28.6%] mt-[10.06%] relative row-1 w-[5.109px]" data-name="Group">
                      <div className="absolute inset-[-2.6%_-4.9%_-2.6%_-4.89%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.60869 10.1331">
                          <g id="Group">
                            <path d={svgPaths.p3aae1900} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[23.473px] ml-[10.29%] mt-[33.96%] relative row-1 w-[44.41px]" data-name="Group">
                      <div className="absolute inset-[-1.07%_-0.56%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.9096 23.9734">
                          <g id="Group">
                            <path d={svgPaths.p45c240} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            <path d={svgPaths.p2f07b800} fill="var(--fill-0, #101700)" id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[3.607px] ml-0 mt-[72.57%] relative row-1 w-[0.016px]" data-name="Group">
                      <div className="absolute inset-[-6.93%_-1544.32%_-6.93%_-1543.89%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.516191 4.10698">
                          <g id="Group">
                            <path d="M0.265602 0.362887V0.25" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            <path d={svgPaths.p3c13bd80} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[9.64px] ml-0 mt-[72.89%] relative row-1 w-[4.933px]" data-name="Group">
                      <div className="absolute inset-[-2.59%_-5.07%_-2.59%_-5.06%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.4334 10.1402">
                          <g id="Group">
                            <path d={svgPaths.p6271e00} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[6.811px] ml-[9.93%] mt-[80.84%] relative row-1 w-[0.2px]" data-name="Group">
                      <div className="absolute inset-[-3.67%_-125.16%_-3.67%_-124.95%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.699915 7.31077">
                          <g id="Group">
                            <path d={svgPaths.p2bb46a00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[28.755px] ml-[0.05%] mt-0 relative row-1 w-[49.489px]" data-name="Group">
                      <div className="absolute inset-[-0.87%_-0.51%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.9894 29.2552">
                          <g id="Group">
                            <path d={svgPaths.p2daf0c00} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[36.72%] place-items-start relative row-1" data-name="Group">
                    <div className="col-1 h-[14.63px] ml-[18.21%] mt-[12.68%] relative row-1 w-[27.068px]" data-name="Group">
                      <div className="absolute inset-[-1.71%_-0.92%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5678 15.1298">
                          <g id="Group">
                            <path d={svgPaths.p5653340} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[15.314px] ml-0 mt-[36.68%] relative row-1 w-[6.046px]" data-name="Group">
                      <div className="absolute inset-[0_-4.13%_-1.63%_-4.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.54649 15.565">
                          <g id="Group">
                            <path d={svgPaths.p3d17cac0} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[9.633px] ml-[15.29%] mt-[54.14%] relative row-1 w-[5.092px]" data-name="Group">
                      <div className="absolute inset-[-2.6%_-4.92%_-2.6%_-4.9%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.59198 10.1331">
                          <g id="Group">
                            <path d={svgPaths.p9ac4800} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[13.441px] ml-[70.91%] mt-[58.64%] relative row-1 w-[11.468px]" data-name="Group">
                      <div className="absolute inset-[-1.86%_-2.18%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9679 13.9415">
                          <g id="Group">
                            <path d={svgPaths.p415c800} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[24.929px] ml-[0.06%] mt-0 relative row-1 w-[38.538px]" data-name="Group">
                      <div className="absolute inset-[-1%_-0.65%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0378 25.4293">
                          <g id="Group">
                            <path d={svgPaths.p20dc6900} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[26.5%] mt-0 place-items-start relative row-1" data-name="Group">
                    <div className="col-1 h-[45.622px] ml-[61.54%] mt-[1.94%] relative row-1 w-[28.516px]" data-name="Group">
                      <div className="absolute inset-[-0.55%_-0.88%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.0164 46.1223">
                          <g id="Group">
                            <path d={svgPaths.p16c73f80} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            <path d={svgPaths.p1c88c9f0} fill="var(--fill-0, #D6DACE)" id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.84%] mt-[0.88%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[120.034px] ml-0 mt-0 relative row-1 w-[53.126px]" data-name="Group">
                            <div className="absolute inset-[-0.21%_-0.47%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.6272 120.533">
                                <g id="Group">
                                  <path d={svgPaths.p1672cf0} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p824e200} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p9feb780} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p23a0ca80} fill="var(--fill-0, #D6DACE)" id="Vector_4" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                  <path d={svgPaths.p183802f2} fill="var(--fill-0, #101700)" id="Vector_5" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                  <path d={svgPaths.p21673e00} fill="var(--fill-0, #101700)" id="Vector_6" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                                  <path d={svgPaths.p2517e940} id="Vector_7" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p14d37500} fill="var(--fill-0, #B4EB38)" id="Vector_8" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p32071490} fill="var(--fill-0, #B4EB38)" id="Vector_9" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <g id="Group_2">
                                    <path d={svgPaths.p233ac400} id="Vector_10" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[16.126px] ml-[43.53%] mt-[53.2%] relative row-1 w-[19.13px]" data-name="Group">
                      <div className="absolute inset-[-1.55%_-1.3%_-1.55%_-1.31%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6302 16.6266">
                          <g id="Group">
                            <path d={svgPaths.p137375c0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[44.08%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[48.335px] ml-0 mt-0 relative row-1 w-[38.884px]" data-name="Group">
                        <div className="absolute inset-[-0.52%_-0.64%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.3843 48.8349">
                            <g id="Group">
                              <path d={svgPaths.p9879580} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.48%] mt-[59.12%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[11.016px] ml-0 mt-0 relative row-1 w-[8.874px]" data-name="Group">
                        <div className="absolute inset-[-2.27%_-2.82%_-2.27%_-2.81%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.37394 11.5161">
                            <g id="Group">
                              <path d={svgPaths.p35f1400} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[8.913px] ml-[35.59px] mt-0 relative row-1 w-[18.547px]" data-name="Vector">
                      <div className="absolute inset-[-2.8%_-1.35%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0471 9.41308">
                          <path d={svgPaths.p1c3b8700} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.28%] mt-[73.33%] place-items-start relative row-1" data-name="Group">
                    <div className="col-1 h-[16.448px] ml-[22.99%] mt-[21.25%] relative row-1 w-[16.704px]" data-name="Group">
                      <div className="absolute inset-[-1.52%_-1.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2043 16.9484">
                          <g id="Group">
                            <path d={svgPaths.p456e240} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[54.42%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[18.877px] ml-0 mt-0 relative row-1 w-[35.342px]" data-name="Group">
                        <div className="absolute inset-[-1.32%_-0.71%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8417 19.3771">
                            <g id="Group">
                              <path d={svgPaths.p11e30780} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[28.751px] ml-[0.01%] mt-[14.15%] relative row-1 w-[49.487px]" data-name="Group">
                      <div className="absolute inset-[-0.87%_-0.5%_-0.87%_-0.51%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.9868 29.2512">
                          <g id="Group">
                            <path d={svgPaths.p1d167f00} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            <g id="Group_2">
                              <path d={svgPaths.p6d26e00} fill="var(--fill-0, #D6DACE)" id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.97%] mt-0 place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[5.76%] place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[9.197px] ml-0 mt-0 relative row-1 w-[8.265px]" data-name="Group">
                          <div className="absolute inset-[-2.72%_-3.03%_-2.72%_-3.02%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.76542 9.69744">
                              <g id="Group">
                                <path d={svgPaths.p28e53c80} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[34.45%] mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[9.202px] ml-0 mt-[20.55%] relative row-1 w-[8.267px]" data-name="Group">
                          <div className="absolute inset-[-2.72%_-3.03%_-2.72%_-3.02%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.7667 9.70199">
                              <g id="Group">
                                <path d={svgPaths.p254fadc0} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[4.777px] ml-[0.24%] mt-0 relative row-1 w-[8.247px]" data-name="Group">
                          <div className="absolute inset-[-5.23%_-3.03%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74745 5.27723">
                              <g id="Group">
                                <path d={svgPaths.p130b3900} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.57%] mt-[14.16%] place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[6.903px] ml-0 mt-[8.01%] relative row-1 w-[0.02px]" data-name="Group">
                          <div className="absolute inset-[-3.62%_-1256.86%_-3.62%_-1256.71%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.51991 7.40318">
                              <g id="Group">
                                <path d={svgPaths.p2741de00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[6.909px] ml-[43.75%] mt-[27.15%] relative row-1 w-[0.029px]" data-name="Group">
                          <div className="absolute inset-[-3.62%_-851.68%_-3.62%_-853.59%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.529321 7.40931">
                              <g id="Group">
                                <path d={svgPaths.p39523280} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[13.642px] ml-0 mt-[8.28%] relative row-1 w-[11.862px]" data-name="Group">
                          <div className="absolute inset-[-1.83%_-2.11%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3617 14.1419">
                              <g id="Group">
                                <path d={svgPaths.p14a90a00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[6.897px] ml-[23.82%] mt-[27.53%] relative row-1 w-[0.03px]" data-name="Group">
                          <div className="absolute inset-[-3.62%_-822.23%_-3.62%_-822.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.530407 7.39707">
                              <g id="Group">
                                <path d={svgPaths.p3d28ad00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[6.909px] ml-[77.65%] mt-[31.29%] relative row-1 w-[0.03px]" data-name="Group">
                          <div className="absolute inset-[-3.62%_-821.9%_-3.62%_-819.8%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.530456 7.40931">
                              <g id="Group">
                                <path d={svgPaths.p24c64900} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[12.352px] ml-[77.67%] mt-[31.59%] relative row-1 w-[3.923px]" data-name="Group">
                          <div className="absolute inset-[-2.02%_-6.36%_-2.02%_-6.38%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.42319 12.8519">
                              <g id="Group">
                                <path d={svgPaths.p3f69ff80} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[13.89px] ml-[31.13%] mt-[27.45%] relative row-1 w-[6.294px]" data-name="Group">
                          <div className="absolute inset-[-1.8%_-3.97%_-1.8%_-3.98%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.79411 14.3905">
                              <g id="Group">
                                <path d={svgPaths.p23c4fa80} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[18.863px] ml-[16.51%] mt-[46.89%] relative row-1 w-[41.517px]" data-name="Group">
                          <div className="absolute inset-[-1.33%_-0.6%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.0168 19.3633">
                              <g id="Group">
                                <path d={svgPaths.p2b256900} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[28.713px] ml-[0.04%] mt-0 relative row-1 w-[49.708px]" data-name="Group">
                          <div className="absolute inset-[-0.87%_-0.5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.2078 29.2126">
                              <g id="Group">
                                <path d={svgPaths.p3966e6b4} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]">
            <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
            <Text text="Gestão decide por percepção, não por sistema." />
            <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Hard_Working">
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[11.85%] place-items-start relative row-1" data-name="Group">
                    <div className="col-1 h-[54.224px] ml-[10.75px] mt-[91.16px] relative row-1 w-[115.956px]" data-name="Vector">
                      <div className="absolute inset-[-0.46%_-0.22%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.456 54.7237">
                          <path d={svgPaths.p31beb800} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[66.457px] ml-0 mt-0 relative row-1 w-[28.689px]" data-name="Group">
                      <div className="absolute inset-[-0.38%_-0.87%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.1887 66.9569">
                          <g id="Group">
                            <path d={svgPaths.p21f44180} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                            <g id="Group_2">
                              <path d={svgPaths.p13f3df80} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[6.46%] mt-[34.77%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[66.508px] ml-[3.43%] mt-[24.32%] relative row-1 w-[41.783px]" data-name="Group">
                        <div className="absolute inset-[-0.38%_-0.6%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2831 67.0085">
                            <g id="Group">
                              <path d={svgPaths.p3be7e500} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.p32159700} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[50.152px] ml-[49.36%] mt-[9.19%] relative row-1 w-[53.092px]" data-name="Group">
                        <div className="absolute inset-[-0.5%_-0.47%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.5915 50.652">
                            <g id="Group">
                              <path d={svgPaths.p1f7f54c0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.p3181540} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.p21969665} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.p16f1b2e0} id="Vector_4" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[48.218px] ml-0 mt-0 relative row-1 w-[111.098px]" data-name="Group">
                          <div className="absolute inset-[-0.52%_-0.22%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.598 48.7182">
                              <g id="Group">
                                <path d={svgPaths.p23c75080} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p138a06f1} fill="var(--fill-0, #70745A)" id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p149c89c0} fill="var(--fill-0, #70745A)" id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p33e0c6c0} fill="var(--fill-0, #D6DACE)" id="Vector_4" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33.99%] mt-[1.03%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[30.458px] ml-0 mt-0 relative row-1 w-[23.813px]" data-name="Group">
                          <div className="absolute inset-[-0.82%_-1.05%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3132 30.9578">
                              <g id="Group">
                                <path d={svgPaths.p22688a80} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[11.74%] mt-[1.26%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[59.481px] ml-0 mt-0 relative row-1 w-[37.542px]" data-name="Group">
                            <div className="absolute inset-[-0.42%_-0.67%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0417 59.9813">
                                <g id="Group">
                                  <path d={svgPaths.p28489c60} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p3ff20b80} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p26179500} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p2d907700} fill="var(--fill-0, #B4EB38)" id="Vector_4" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p2c97b880} fill="var(--fill-0, #B4EB38)" id="Vector_5" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[36.7%] mt-[34.06%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[-0.06%] mt-[-0.05%] place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[0.084px] ml-[-0.06%] mt-[-0.02%] relative row-1 w-[0.536px]" data-name="Group">
                          <div className="absolute inset-[-297.1%_-46.61%_-297.03%_-46.73%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.03574 0.584198">
                              <g id="Group">
                                <path d={svgPaths.pf389c00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p1a0e9400} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[61.732px] ml-[8.17px] mt-[30.81px] relative row-1 w-[111.094px]" data-name="Vector">
                      <div className="absolute inset-[-0.41%_-0.23%_-0.4%_-0.23%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.594 62.2319">
                          <path d={svgPaths.p3cd04140} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[33.139px] ml-[13.48px] mt-[16.81px] relative row-1 w-[33.027px]" data-name="Vector">
                      <div className="absolute inset-[-0.75%_-0.76%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.5266 33.6396">
                          <path d={svgPaths.pb95a6f0} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[34.33%] mt-[11.44%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[53.01px] ml-0 mt-0 relative row-1 w-[41.132px]" data-name="Group">
                          <div className="absolute inset-[-0.47%_-0.61%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.6319 53.5098">
                              <g id="Group">
                                <path d={svgPaths.p1a086f80} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[50.986px] ml-[8.81%] mt-[3.99%] relative row-1 w-[37.978px]" data-name="Group">
                          <div className="absolute inset-[-0.49%_-0.66%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4784 51.4866">
                              <g id="Group">
                                <path d={svgPaths.p3ec17980} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[48.63%] mt-[30.92%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[5.958px] ml-[2.12%] mt-[59.32%] relative row-1 w-[16.755px]" data-name="Group">
                          <div className="absolute inset-[-4.2%_-1.49%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2554 6.45821">
                              <g id="Group">
                                <path d={svgPaths.pbf672c0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[29.377px] ml-[10.06%] mt-0 relative row-1 w-[16.738px]" data-name="Group">
                          <div className="absolute inset-[-0.85%_-1.49%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2378 29.8773">
                              <g id="Group">
                                <path d={svgPaths.p113e0500} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[25px] ml-0 mt-[15.22%] relative row-1 w-[10.955px]" data-name="Group">
                          <div className="absolute inset-[-1%_-2.28%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4544 25.4999">
                              <g id="Group">
                                <path d={svgPaths.peb44400} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 h-[17.947px] ml-[22.67px] mt-0 relative row-1 w-[20.586px]" data-name="Vector">
                    <div className="absolute inset-[-1.39%_-1.21%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0864 18.4465">
                        <path d={svgPaths.p334d900} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 h-[18.322px] ml-[25.45px] mt-[8.39px] relative row-1 w-[18.207px]" data-name="Vector">
                    <div className="absolute inset-[-1.36%_-1.37%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7071 18.8224">
                        <path d={svgPaths.p310cce80} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Helper additionalClassNames="h-[463px]" />
      </div>
      <div className="absolute contents left-0 top-[1880px]">
        <Text1 text="Produto" additionalClassNames="left-[756px] top-[1880px]" />
        <Text1 text="Comercial" additionalClassNames="left-[756px] top-[1967px]" />
        <Text1 text="Tecnologia" additionalClassNames="left-[944px] top-[1880px]" />
        <Text1 text="Operações" additionalClassNames="left-[944px] top-[1967px]" />
        <div className="absolute bg-[#f2f3ef] content-stretch flex h-[87px] items-end left-[1132px] p-[16px] top-[1967px] w-[188px]">
          <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px] whitespace-nowrap">
            <p className="mb-0">Inteligência</p>
            <p>Artificial</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[174px] items-start justify-between left-[192px] p-[24px] top-[1880px] w-[564px]">
          <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="h-[117px] leading-[normal] relative shrink-0 w-[280px] whitespace-pre-wrap">
            <p className="absolute font-['Inter_Tight:Medium',sans-serif] font-medium left-0 text-[#101700] text-[24px] top-0 w-[242px]">Somos a engenharia estrutural do negócio.</p>
            <p className="absolute font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] left-0 not-italic text-[#70745a] text-[16px] top-[106px] uppercase w-[280px]">Trabalhamos na interseção de:</p>
          </div>
        </div>
        <Helper1 additionalClassNames="left-[1320px]" />
        <Helper1 additionalClassNames="left-0" />
        <div className="absolute bg-[#f2f3ef] h-[87px] left-[1132px] top-[1880px] w-[188px]">
          <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
          <p className="absolute font-['Inter_Display:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#101700] text-[16px] top-[59px]">Growth</p>
          <div className="absolute flex items-center justify-center left-[179px] size-[9px] top-0">
            <div className="flex-none rotate-180">
              <div className="relative size-[9px]">
                <div aria-hidden="true" className="absolute border-[#70745a] border-b-2 border-l-2 border-solid inset-[0_0_-1px_-1px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}