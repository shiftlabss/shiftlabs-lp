import clsx from "clsx";
import svgPaths from "./svg-pgtixnbxan";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[231px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative shrink-0 w-[106px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 22.2306">
        {children}
      </svg>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 85">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[192px] py-[36px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text, children }: React.PropsWithChildren<TextProps>) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="col-1 font-['Inter_Display:Regular',sans-serif] leading-[1.302] ml-[22px] mt-[0.06px] not-italic relative row-1 text-[#70745a] text-[16px]">{text}</p>
      <Wrapper2>{children}</Wrapper2>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.28207 20.2114">
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type Group9Props = {
  additionalClassNames?: string;
};

function Group9({ children, additionalClassNames = "" }: React.PropsWithChildren<Group9Props>) {
  return (
    <div className={clsx("col-1 h-[16.389px] mt-0 relative row-1 w-[27.669px]", additionalClassNames)}>
      <div className="absolute inset-[-1.53%_-0.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1687 16.8886">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function Group8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="col-1 h-[16.401px] ml-0 mt-0 relative row-1 w-[27.689px]">
      <div className="absolute inset-[-1.52%_-0.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1885 16.9005">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type Group7Props = {
  additionalClassNames?: string;
};

function Group7({ children, additionalClassNames = "" }: React.PropsWithChildren<Group7Props>) {
  return (
    <div className={clsx("col-1 h-[25.726px] mt-[16.81%] relative row-1 w-[18.95px]", additionalClassNames)}>
      <div className="absolute inset-[-0.97%_-1.32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4497 26.2258">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type Group6Props = {
  additionalClassNames?: string;
};

function Group6({ children, additionalClassNames = "" }: React.PropsWithChildren<Group6Props>) {
  return (
    <div className={clsx("col-1 h-[16.389px] mt-0 relative row-1 w-[27.669px]", additionalClassNames)}>
      <div className="absolute inset-[-1.53%_-0.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.1687 16.8888">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type Group5Props = {
  additionalClassNames?: string;
};

function Group5({ children, additionalClassNames = "" }: React.PropsWithChildren<Group5Props>) {
  return (
    <div className={clsx("col-1 h-[19.711px] relative row-1 w-[8.782px]", additionalClassNames)}>
      <Wrapper additionalClassNames="inset-[-1.27%_-2.85%_-1.27%_-2.84%]">{children}</Wrapper>
    </div>
  );
}
type Group4Props = {
  additionalClassNames?: string;
};

function Group4({ children, additionalClassNames = "" }: React.PropsWithChildren<Group4Props>) {
  return (
    <div className={clsx("col-1 h-[25.701px] mt-[16.8%] relative row-1 w-[18.925px]", additionalClassNames)}>
      <div className="absolute inset-[-0.97%_-1.32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4252 26.2005">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type Group3Props = {
  additionalClassNames?: string;
};

function Group3({ children, additionalClassNames = "" }: React.PropsWithChildren<Group3Props>) {
  return (
    <div className={clsx("col-1 h-[15.518px] mt-0 relative row-1 w-[26.196px]", additionalClassNames)}>
      <div className="absolute inset-[-1.61%_-0.96%_-1.61%_-0.95%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6958 16.0182">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type Group2Props = {
  additionalClassNames?: string;
};

function Group2({ children, additionalClassNames = "" }: React.PropsWithChildren<Group2Props>) {
  return (
    <div className={clsx("col-1 h-[17.595px] mt-[22.82%] relative row-1 w-[17.494px]", additionalClassNames)}>
      <div className="absolute inset-[-1.42%_-1.43%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9941 18.0949">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function Group1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="col-1 h-[37.814px] ml-0 mt-0 relative row-1 w-[49.513px]">
      <div className="absolute inset-[-0.66%_-0.51%_-0.66%_-0.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0129 38.3138">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function Group({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="col-1 h-[9.518px] ml-[0.51%] mt-0 relative row-1 w-[16.433px]">
      <div className="absolute inset-[-2.63%_-1.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9328 10.0185">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type FeatureItemTextProps = {
  text: string;
};

function FeatureItemText({ text }: FeatureItemTextProps) {
  return (
    <div className="bg-[#f2f3ef] content-stretch flex h-[118px] items-end p-[24px] relative shrink-0 w-[376px]">
      <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter_Tight:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#101700] text-[16px]">{text}</p>
    </div>
  );
}
type AudienceItemTextProps = {
  text: string;
};

function AudienceItemText({ text }: AudienceItemTextProps) {
  return (
    <div className="content-stretch flex h-[118px] items-end p-[24px] relative shrink-0 w-[564px]">
      <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px] w-[162px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type CaseStudyDescriptionContainerProps = {
  text: string;
  text1: string;
};

function CaseStudyDescriptionContainer({ text, text1 }: CaseStudyDescriptionContainerProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[16px]">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#101700]">{text}</p>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[107.61499786376953%] relative shrink-0 text-[#70745a] w-[315px] whitespace-pre-wrap">{text1}</p>
    </div>
  );
}
type FrameworkLayerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function FrameworkLayerText({ text, additionalClassNames = "" }: FrameworkLayerTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[24px] relative shrink-0 w-[85px]", additionalClassNames)}>
      <Wrapper3 additionalClassNames="h-[85px] w-full">
        <circle cx="42.5" cy="42.5" id="Ellipse 1" r="42" stroke="var(--stroke-0, #70745A)" />
      </Wrapper3>
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.302] not-italic relative shrink-0 text-[#70745a] text-[16px] text-center w-full whitespace-pre-wrap">{text}</p>
    </div>
  );
}

function Helper5() {
  return (
    <div className="h-[462px] relative shrink-0 w-[192px]">
      <div aria-hidden="true" className="absolute border-[#d6dace] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
    </div>
  );
}

function Vector() {
  return (
    <div className="col-1 h-[4.759px] ml-[8.33px] mt-[4.76px] relative row-1 w-[8.188px]">
      <div className="absolute inset-[-5.25%_-3.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.68852 5.25868">
          <path d={svgPaths.p1c46f080} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText({ text, additionalClassNames = "" }: ContainerTextProps) {
  return (
    <div className={clsx("bg-[#f2f3ef] col-1 content-stretch flex h-[87px] items-end p-[16px] relative row-1 w-[188px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px]">{text}</p>
    </div>
  );
}
type ContentTextContainerTextProps = {
  text: string;
};

function ContentTextContainerText({ text }: ContentTextContainerTextProps) {
  return (
    <div className="content-stretch flex flex-col h-[232px] items-start justify-end p-[24px] relative shrink-0 w-[315px]">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px] w-[207px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}

function Helper4() {
  return (
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
  );
}
type ButtonContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonContainerText({ text, additionalClassNames = "" }: ButtonContainerTextProps) {
  return (
    <div className={clsx("bg-[#101700] content-stretch flex p-[16px] relative shrink-0", additionalClassNames)}>
      <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f3ef] text-[16px] text-center uppercase">{text}</p>
    </div>
  );
}
type Helper3Props = {
  additionalClassNames?: string;
};

function Helper3({ additionalClassNames = "" }: Helper3Props) {
  return (
    <div className={additionalClassNames}>
      <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
    </div>
  );
}
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return <Helper3 additionalClassNames={clsx("col-1 h-[174px] mt-0 relative row-1 w-[192px]", additionalClassNames)} />;
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return <Helper3 additionalClassNames={clsx("relative shrink-0 w-[192px]", additionalClassNames)} />;
}

function Helper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 33.9148 34.0638" className="absolute block size-full">
      <g id="Group">
        <path d={svgPaths.p32570e00} fill="var(--fill-0, #101700)" id="Vector" />
        <path d={svgPaths.p2aaefb00} fill="var(--fill-0, #101700)" id="Vector_2" />
        <path d={svgPaths.p6d58c60} fill="var(--fill-0, #101700)" id="Vector_3" />
        <path d={svgPaths.pdb9af80} fill="var(--fill-0, #101700)" id="Vector_4" />
        <path d={svgPaths.p366c4780} fill="var(--fill-0, #101700)" id="Vector_5" />
        <path d={svgPaths.p219d7300} fill="var(--fill-0, #101700)" id="Vector_6" />
        <path d={svgPaths.p28330940} fill="var(--fill-0, #101700)" id="Vector_7" />
      </g>
    </svg>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f2f3ef] relative size-full">
      <div className="absolute content-stretch flex flex-col items-start justify-center left-0 px-[192px] py-[16px] top-0 w-[1512px]" data-name="Top">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo and Text Container">
          <div className="col-1 h-[34.064px] ml-0 mt-0 relative row-1 w-[33.915px]" data-name="Group">
            <Helper />
          </div>
          <div className="col-1 h-[14.84px] ml-[34.07%] mt-[29.03%] relative row-1 w-[79.779px]" data-name="Text Container">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.7793 14.8396">
              <g id="Text Container">
                <path d={svgPaths.pc4be800} fill="var(--fill-0, #101700)" id="Vector" />
                <path d={svgPaths.p303e5b80} fill="var(--fill-0, #101700)" id="Vector_2" />
                <path d={svgPaths.p29dd9600} fill="var(--fill-0, #101700)" id="Vector_3" />
                <path d={svgPaths.p24aff100} fill="var(--fill-0, #101700)" id="Vector_4" />
                <path d={svgPaths.p7460f80} fill="var(--fill-0, #101700)" id="Vector_5" />
                <path d={svgPaths.p26df5d00} fill="var(--fill-0, #101700)" id="Vector_6" />
                <path d={svgPaths.p2d07ed00} fill="var(--fill-0, #101700)" id="Vector_7" />
                <path d={svgPaths.p3cf36d00} fill="var(--fill-0, #101700)" id="Vector_8" />
                <path d={svgPaths.p27734e00} fill="var(--fill-0, #101700)" id="Vector_9" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-[66px] w-[1512px]" data-name="Header">
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Top Section">
          <Helper1 additionalClassNames="h-[462px]" />
          <div className="content-stretch flex flex-col h-[462px] items-start justify-between p-[24px] relative shrink-0 w-[564px]" data-name="Text Section">
            <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
            <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[450px] whitespace-pre-wrap" data-name="Text Block">
              <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-full" data-name="Title and Subtitle">
                <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full">Engineering Predictable Growth</p>
                <div className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[40px] w-full">
                  <p className="mb-0">{`We don’t build ideas. `}</p>
                  <p>We engineer businesses.</p>
                </div>
              </div>
              <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.333] not-italic relative shrink-0 text-[#70745a] text-[16px] w-[343px]">A Shift Labs transforma ideias, operações confusas ou produtos mal estruturados em negócios organizados, previsíveis e escaláveis.</p>
            </div>
            <ButtonContainerText text="conhecer mais" additionalClassNames="items-center" />
          </div>
          <div className="content-stretch flex flex-col h-[462px] items-center justify-center p-[24px] relative shrink-0 w-[564px]" data-name="Image Section">
            <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
            <div className="bg-white h-[430px] shrink-0 w-[532px]" data-name="Image Placeholder" />
          </div>
          <Helper1 additionalClassNames="h-[462px]" />
        </div>
        <div className="h-[188px] relative shrink-0 w-full" data-name="Bottom Section">
          <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="content-stretch flex flex-col items-start pb-[53px] pt-[48px] px-[192px] relative size-full">
            <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1128px]" data-name="Ecosystem Container">
              <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-[405px] whitespace-pre-wrap" data-name="Ecosystem Text Block">
                <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full">/Nosso Ecossistema</p>
                <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[24px] w-full">Plataformas e operações coordenadas pela mesma engenharia.</p>
              </div>
              <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Logos Container">
                <Helper4 />
                <Wrapper4 additionalClassNames="h-[22.231px]">
                  <g id="Logo Group 2">
                    <path d={svgPaths.p1e64ea00} fill="var(--fill-0, #101700)" id="Vector" />
                    <path d={svgPaths.p27389c0} fill="var(--fill-0, #101700)" id="Vector_2" />
                    <path d={svgPaths.p3cb0fc80} fill="var(--fill-0, #101700)" id="Vector_3" />
                    <path d={svgPaths.p2912eb80} fill="var(--fill-0, #101700)" id="Vector_4" />
                    <path d={svgPaths.pc669e00} fill="var(--fill-0, #101700)" id="Vector_5" />
                    <path d={svgPaths.p2dd74f00} fill="var(--fill-0, #101700)" id="Vector_6" />
                    <path d={svgPaths.p1d01bca2} fill="var(--fill-0, #101700)" id="Vector_7" />
                    <g id="Logo Group 2 Item">
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
                </Wrapper4>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo Group 3">
                  <div className="col-1 h-[21.619px] ml-[29.18%] mt-0 relative row-1 w-[69.403px]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.4019 21.6191">
                      <g id="Group">
                        <path d={svgPaths.p2d9b6570} fill="var(--fill-0, #101700)" id="Vector" />
                        <path d={svgPaths.p3e637a00} fill="var(--fill-0, #101700)" id="Vector_2" />
                        <path d={svgPaths.p2f8f2700} fill="var(--fill-0, #101700)" id="Vector_3" />
                        <path d={svgPaths.p1e7d4000} fill="var(--fill-0, #101700)" id="Vector_4" />
                      </g>
                    </svg>
                  </div>
                  <div className="col-1 h-[21.619px] ml-0 mt-0 relative row-1 w-[21.572px]" data-name="Logo Group 3 Item">
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
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-[716px] w-[1512px]" data-name="Problema">
        <div className="h-[188px] relative shrink-0 w-full" data-name="Header Container">
          <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-center pb-[53px] pt-[48px] px-[192px] relative size-full">
              <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1030px] whitespace-pre-wrap" data-name="Header Content">
                <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-[499px]" data-name="Header Text Container">
                  <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full">/problema</p>
                  <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[40px] w-full">Crescer não é o problema. Crescer desorganizado é.</p>
                </div>
                <p className="font-['Inter_Display:Regular',sans-serif] leading-[102.2750015258789%] not-italic relative shrink-0 text-[#70745a] text-[16px] w-[335px]">A maioria das empresas cresce mais rápido do que sua própria estrutura consegue sustentar.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content Container">
          <Helper1 additionalClassNames="h-[463px]" />
          <div className="content-start flex flex-wrap gap-[1px_0px] items-start relative shrink-0 w-[1128px]" data-name="Main Content">
            <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]" data-name="Content Block">
              <div aria-hidden="true" className="absolute border-[#d6dace] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
              <ContentTextContainerText text="Produto evolui sem alinhamento com comercial." />
              <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]" data-name="Content Image Container">
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
                        <div className="col-1 h-[15.529px] ml-0 mt-0 relative row-1 w-[42.926px]" data-name="Group">
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
                            <div className="col-1 h-[29.463px] ml-[37.45%] mt-[23.4%] relative row-1 w-[25.442px]" data-name="Group">
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
                          <div className="col-1 h-[28.726px] ml-0 mt-0 relative row-1 w-[26.079px]" data-name="Group">
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
                        <div className="col-1 h-[8.541px] ml-[61.7%] mt-[9.31%] relative row-1 w-[1.557px]" data-name="Group">
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
            <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]" data-name="Content Block">
              <div aria-hidden="true" className="absolute border-[#d6dace] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
              <ContentTextContainerText text="Marketing gera demanda que a operação não absorve." />
              <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]" data-name="Content Image Container">
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
                                  <div className="col-1 h-[19.913px] ml-0 mt-[60.21%] relative row-1 w-[6.832px]" data-name="Group">
                                    <div className="absolute inset-[-1.26%_-3.67%_-1.26%_-3.66%]">
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
                          <div className="col-1 h-[46.586px] ml-0 mt-0 relative row-1 w-[107.335px]" data-name="Group">
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
                          <div className="col-1 h-[46.064px] ml-0 mt-0 relative row-1 w-[60.605px]" data-name="Group">
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
            <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]" data-name="Content Block">
              <div aria-hidden="true" className="absolute border-[#d6dace] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
              <div className="content-stretch flex flex-col h-[232px] items-start justify-end p-[24px] relative shrink-0 w-[315px]" data-name="Content Text Container">
                <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px] w-[225px] whitespace-pre-wrap">Tecnologia acumula decisões sem arquitetura clara.</p>
              </div>
              <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]" data-name="Content Image Container">
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
                      <div className="col-1 h-[23.473px] ml-[10.29%] mt-[33.96%] relative row-1 w-[44.411px]" data-name="Group">
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
                            <div className="col-1 h-[120.034px] ml-0 mt-0 relative row-1 w-[53.127px]" data-name="Group">
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
            <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]" data-name="Content Block">
              <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
              <ContentTextContainerText text="Gestão decide por percepção, não por sistema." />
              <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]" data-name="Content Image Container">
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
                        <div className="col-1 h-[66.508px] ml-[3.43%] mt-[24.32%] relative row-1 w-[41.784px]" data-name="Group">
                          <div className="absolute inset-[-0.38%_-0.6%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2831 67.0085">
                              <g id="Group">
                                <path d={svgPaths.p3be7e500} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p32159700} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[50.152px] ml-[49.36%] mt-[9.19%] relative row-1 w-[53.091px]" data-name="Group">
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
          <Helper1 additionalClassNames="h-[463px]" />
        </div>
        <div className="h-[188px] relative shrink-0 w-full" data-name="Footer Container">
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center pb-[53px] pl-[192px] pr-[285px] pt-[48px] relative size-full">
              <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[24px] w-[472px] whitespace-pre-wrap">O resultado não é visível no início. É fragmentação. E fragmentação não quebra no dia um. Ela corrói aos poucos empresas que “estavam indo bem”.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-[1555px] w-[1512px]" data-name="Container">
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-col justify-end size-full">
            <div className="content-stretch flex flex-col items-start justify-end pb-[36px] pt-[64px] px-[192px] relative w-full">
              <div className="content-stretch flex gap-[46px] items-end justify-center relative shrink-0 whitespace-pre-wrap" data-name="Container">
                <div className="content-stretch flex flex-col gap-[32px] items-start leading-[normal] relative shrink-0 w-[649px]" data-name="Container">
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
          </div>
        </div>
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Container">
          <ContainerText text="Produto" additionalClassNames="ml-[756px] mt-0" />
          <ContainerText text="Comercial" additionalClassNames="ml-[756px] mt-[87px]" />
          <ContainerText text="Tecnologia" additionalClassNames="ml-[944px] mt-0" />
          <ContainerText text="Operações" additionalClassNames="ml-[944px] mt-[87px]" />
          <ContainerText text="Growth" additionalClassNames="ml-[1132px] mt-0" />
          <div className="bg-[#f2f3ef] col-1 content-stretch flex h-[87px] items-end ml-[1132px] mt-[87px] p-[16px] relative row-1 w-[188px]" data-name="Container">
            <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
            <div className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px] whitespace-nowrap">
              <p className="mb-0">Inteligência</p>
              <p>Artificial</p>
            </div>
          </div>
          <div className="col-1 content-stretch flex flex-col h-[174px] items-start justify-between ml-[192px] mt-0 p-[24px] relative row-1 w-[564px]" data-name="Container">
            <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
            <div className="h-[117px] leading-[normal] relative shrink-0 w-[280px] whitespace-pre-wrap" data-name="Container">
              <p className="absolute font-['Inter_Tight:Medium',sans-serif] font-medium left-0 text-[#101700] text-[24px] top-0 w-[242px]">Somos a engenharia estrutural do negócio.</p>
              <p className="absolute font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] left-0 not-italic text-[#70745a] text-[16px] top-[106px] uppercase w-[280px]">Trabalhamos na interseção de:</p>
            </div>
          </div>
          <Helper2 additionalClassNames="ml-[1320px]" />
          <Helper2 additionalClassNames="ml-0" />
        </div>
      </div>
      <div className="absolute h-[48px] left-0 top-[1996px] w-[1512px]" data-name="Spacer" />
      <div className="absolute content-stretch flex flex-col items-start left-[-1px] top-[2044px] w-[1512px]" data-name="O que fazemos">
        <div className="relative shrink-0 w-full" data-name="Header Container">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-center pb-[36px] pt-[64px] px-[192px] relative w-full">
              <div className="content-stretch flex items-end relative shrink-0 w-[1030px]" data-name="Header Content">
                <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-[499px] whitespace-pre-wrap" data-name="Header Text Container">
                  <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full">/O QUE FAZEMOS</p>
                  <div className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[40px] w-full">
                    <p className="mb-0">Como estruturamos</p>
                    <p>negócios.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Services Container">
          <Helper1 additionalClassNames="h-[463px]" />
          <div className="content-start flex flex-wrap gap-[1px_0px] items-start relative shrink-0 w-[1128px]" data-name="Services Content">
            <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]" data-name="Service Item">
              <div aria-hidden="true" className="absolute border-[#d6dace] border-l border-r border-solid border-t inset-[-0.5px_-0.5px_0_-0.5px] pointer-events-none" />
              <div className="content-stretch flex flex-col h-[232px] items-start justify-end p-[24px] relative shrink-0 w-[315px]" data-name="Service Text Container">
                <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[16px]" data-name="Service Description Container">
                  <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#101700]">{`Produto & Estratégia`}</p>
                  <p className="font-['Inter_Display:Regular',sans-serif] leading-[107.61499786376953%] relative shrink-0 text-[#70745a] w-[235px] whitespace-pre-wrap">Estruturamos proposta de valor, arquitetura e roadmap com base em pesquisa e validação.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 h-[140.295px] ml-0 mt-[10.94%] relative row-1 w-[128.724px]" data-name="Group">
                    <div className="absolute inset-[-0.18%_-0.19%_-0.18%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.975 140.796">
                        <g id="Group">
                          <path d={svgPaths.p1d603c00} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          <g id="Group_2">
                            <path d={svgPaths.p941c200} fill="var(--fill-0, #101700)" id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            <path d={svgPaths.pe7cc280} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            <path d={svgPaths.p3e55def0} fill="var(--fill-0, #D6DACE)" id="Vector_4" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            <path d={svgPaths.p29de1980} id="Vector_5" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            <path d={svgPaths.p3b215600} fill="var(--fill-0, #B4EB38)" id="Vector_6" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </g>
                          <g id="Group_3">
                            <g id="Group_4">
                              <path d={svgPaths.p8c0700} fill="var(--fill-0, #D6DACE)" id="Vector_7" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                            <g id="Group_5">
                              <path d={svgPaths.p3dce2b00} id="Vector_8" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.p27a881f0} fill="var(--fill-0, #D6DACE)" id="Vector_9" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <g id="Group_6">
                                <path d={svgPaths.p1b66600} fill="var(--fill-0, #70745A)" id="Vector_10" />
                                <path d={svgPaths.pc214500} fill="var(--fill-0, #70745A)" id="Vector_11" />
                              </g>
                            </g>
                            <path d={svgPaths.p27419e00} fill="var(--fill-0, #B4EB38)" id="Vector_12" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            <path d={svgPaths.p248be80} id="Vector_13" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            <g id="Group_7">
                              <path d={svgPaths.p17458440} id="Vector_14" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </g>
                          <path d={svgPaths.p3a07c080} id="Vector_15" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          <path d={svgPaths.p6ee3940} id="Vector_16" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[84.15%] mt-0 place-items-start relative row-1" data-name="Group">
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[26.407px] ml-0 mt-0 relative row-1 w-[20.599px]" data-name="Group">
                        <div className="absolute inset-[-0.95%_-1.21%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0985 26.9067">
                            <g id="Group">
                              <path d={svgPaths.p26782c80} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.pcfa1a80} fill="var(--fill-0, #B4EB38)" id="Vector_2" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.p1a039700} fill="var(--fill-0, #B4EB38)" id="Vector_3" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[23.397px] ml-[12.08%] mt-[11.4%] relative row-1 w-[18.109px]" data-name="Group">
                        <div className="absolute inset-[-1.07%_-1.38%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.609 23.8967">
                            <g id="Group">
                              <path d={svgPaths.p38bbe700} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]" data-name="Service Item">
              <div aria-hidden="true" className="absolute border-[#d6dace] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
              <div className="content-stretch flex flex-col h-[232px] items-start justify-end p-[24px] relative shrink-0 w-[315px]" data-name="Service Text Container">
                <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[16px]" data-name="Service Description Container">
                  <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#101700]">{`Tecnologia & Arquitetura`}</p>
                  <p className="font-['Inter_Display:Regular',sans-serif] leading-[107.61499786376953%] relative shrink-0 text-[#70745a] w-[235px] whitespace-pre-wrap">Projetamos arquiteturas escaláveis com stack moderna e bem definida.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                    <div className="col-1 h-[65.962px] ml-[0.02%] mt-[49.26%] relative row-1 w-[184.176px]" data-name="Group">
                      <div className="absolute inset-[-0.38%_-0.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.676 66.4622">
                          <g id="Group">
                            <path d={svgPaths.p34e4b480} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[0.17%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.02%] mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[69.663px] ml-0 mt-0 relative row-1 w-[119.967px]" data-name="Group">
                          <div className="absolute inset-[-0.36%_-0.21%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.467 70.1635">
                              <g id="Group">
                                <path d={svgPaths.p17400100} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <path d={svgPaths.p34c9c480} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[9.62%] place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[75.691px] ml-0 mt-[30.73%] relative row-1 w-[184.215px]" data-name="Group">
                          <div className="absolute inset-[-0.33%_-0.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.715 76.1909">
                              <g id="Group">
                                <path d={svgPaths.p2dcbb680} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[37.875px] ml-0 mt-[45.67%] relative row-1 w-[37.576px]" data-name="Group">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5758 37.8751">
                            <g id="Group">
                              <path d={svgPaths.p2d15cb00} fill="var(--fill-0, #70745A)" id="Vector" />
                              <path d={svgPaths.p16864400} fill="var(--fill-0, #70745A)" id="Vector_2" />
                            </g>
                          </svg>
                        </div>
                        <div className="col-1 h-[95.11px] ml-[5.77%] mt-0 relative row-1 w-[173.581px]" data-name="Group">
                          <div className="absolute inset-[-0.26%_-0.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174.081 95.6104">
                              <g id="Group">
                                <path d={svgPaths.p2511e600} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[5.225px] ml-[5.2%] mt-[43.88%] relative row-1 w-[9.014px]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01428 5.22526">
                        <g id="Group">
                          <path d={svgPaths.p2f69fb80} fill="var(--fill-0, #70745A)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="col-1 h-[5.225px] ml-[11%] mt-[39.05%] relative row-1 w-[9.014px]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01431 5.22523">
                        <g id="Group">
                          <path d={svgPaths.p17a93100} fill="var(--fill-0, #70745A)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="col-1 h-[5.225px] ml-[16.81%] mt-[34.21%] relative row-1 w-[9.014px]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01428 5.22524">
                        <g id="Group">
                          <path d={svgPaths.p380baf80} fill="var(--fill-0, #70745A)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.28%] mt-0 place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.51%] mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[22.664px] ml-[41.85%] mt-[30.99%] relative row-1 w-[29.597px]" data-name="Group">
                          <div className="absolute inset-[-1.1%_-0.84%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.0972 23.1642">
                              <g id="Group">
                                <path d={svgPaths.p3423bc00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[17.364px] ml-[0.1%] mt-0 relative row-1 w-[50.865px]" data-name="Group">
                          <div className="absolute inset-[-1.44%_-0.49%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.3646 17.8639">
                              <g id="Group">
                                <path d={svgPaths.p24c43100} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[9.05%] place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[50.938px] ml-0 mt-0 relative row-1 w-[42.263px]" data-name="Group">
                            <div className="absolute inset-[-0.49%_-0.59%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.7629 51.4381">
                                <g id="Group">
                                  <path d={svgPaths.p3f765f60} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p2e5d4480} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[31.921px] ml-[82.93%] mt-[37.34%] relative row-1 w-[8.692px]" data-name="Group">
                            <div className="absolute inset-[-0.78%_-2.88%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.19203 32.4212">
                                <g id="Group">
                                  <path d={svgPaths.p27b6c4f0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[12.069px] ml-[41.95%] mt-[37.33%] relative row-1 w-[29.549px]" data-name="Group">
                            <div className="absolute inset-[-2.07%_-0.85%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.049 12.5695">
                                <g id="Group">
                                  <path d={svgPaths.p2c71bf00} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[32.14%] place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[29.358px] ml-0 mt-[29.14%] relative row-1 w-[50.913px]" data-name="Group">
                          <div className="absolute inset-[-0.85%_-0.49%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.4129 29.8584">
                              <g id="Group">
                                <path d={svgPaths.p519f640} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[29.423px] ml-[0.08%] mt-0 relative row-1 w-[50.865px]" data-name="Group">
                          <div className="absolute inset-[-0.85%_-0.49%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.3645 29.9226">
                              <g id="Group">
                                <path d={svgPaths.p32c8e200} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[19.183px] ml-[16.81%] mt-[43.88%] relative row-1 w-[33.071px]" data-name="Group">
                      <div className="absolute inset-[-1.3%_-0.76%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.5712 19.6834">
                          <g id="Group">
                            <path d={svgPaths.p6993800} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[27.287px] ml-[26.56%] mt-[46.37%] relative row-1 w-[47.016px]" data-name="Group">
                      <div className="absolute inset-[-0.92%_-0.53%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.5156 27.7869">
                          <g id="Group">
                            <path d={svgPaths.p3274780} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[32.152px] ml-[36.32%] mt-[51.36%] relative row-1 w-[55.387px]" data-name="Group">
                      <div className="absolute inset-[-0.78%_-0.45%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.8867 32.6516">
                          <g id="Group">
                            <path d={svgPaths.p10261f00} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[13.765px] ml-[30.97px] mt-[62.47px] relative row-1 w-[33.071px]" data-name="Vector">
                      <div className="absolute inset-[-1.82%_-0.76%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.5713 14.2652">
                          <path d={svgPaths.p390c1980} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[21.869px] ml-[48.94px] mt-[65.71px] relative row-1 w-[47.016px]" data-name="Vector">
                      <div className="absolute inset-[-1.14%_-0.53%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.5156 22.3688">
                          <path d={svgPaths.p3390f400} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[26.733px] ml-[66.91px] mt-[72.18px] relative row-1 w-[55.387px]" data-name="Vector">
                      <div className="absolute inset-[-0.94%_-0.45%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.8868 27.2335">
                          <path d={svgPaths.p15e51f60} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]" data-name="Service Item">
              <div aria-hidden="true" className="absolute border-[#d6dace] border-b border-solid border-t inset-[-0.5px_0] pointer-events-none" />
              <div className="content-stretch flex flex-col h-[232px] items-start justify-end p-[24px] relative shrink-0 w-[315px]" data-name="Service Text Container">
                <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[16px]" data-name="Service Description Container">
                  <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#101700]">{`Growth & Comercial`}</p>
                  <p className="font-['Inter_Display:Regular',sans-serif] leading-[107.61499786376953%] relative shrink-0 text-[#70745a] w-[235px] whitespace-pre-wrap">Estruturamos posicionamento, pricing e funis com lógica de margem e LTV.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[24.68%] place-items-start relative row-1" data-name="Group">
                    <div className="col-1 h-[57.506px] ml-0 mt-0 relative row-1 w-[98.721px]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.7215 57.5065">
                        <g id="Group">
                          <path d={svgPaths.p25cd34e0} fill="var(--fill-0, #D6DACE)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.49%] mt-[30.45%] place-items-start relative row-1" data-name="Group">
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                      <div className="col-1 h-[49.323px] ml-[0.02%] mt-0 relative row-1 w-[97.325px]" data-name="Group">
                        <div className="absolute inset-[-0.51%_-0.26%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.8249 49.8235">
                            <g id="Group">
                              <path d={svgPaths.p1761180} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[31.282px] ml-[0.02%] mt-[53.2%] relative row-1 w-[97.314px]" data-name="Group">
                        <div className="absolute inset-[-0.8%_-0.26%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.8151 31.7816">
                            <g id="Group">
                              <path d={svgPaths.p1cc63440} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[37.682px] ml-[9.11%] mt-[9.76%] relative row-1 w-[79.646px]" data-name="Group">
                        <div className="absolute inset-[-0.66%_-0.31%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.1461 38.1824">
                            <g id="Group">
                              <path d={svgPaths.p3608a10} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[39.692px] ml-0 mt-[31.52%] relative row-1 w-[97.353px]" data-name="Group">
                        <div className="absolute inset-[-0.63%_-0.26%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.8532 40.1917">
                            <g id="Group">
                              <path d={svgPaths.p27d0c210} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[35.865px] ml-[0.01%] mt-[31.42%] relative row-1 w-[24.246px]" data-name="Group">
                        <div className="absolute inset-[-0.7%_-1.03%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.7448 36.3647">
                            <g id="Group">
                              <path d={svgPaths.p17fefc00} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.pc578200} fill="var(--fill-0, #70745A)" id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.37%] mt-0 place-items-start relative row-1" data-name="Group">
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                            <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[71.02%] mt-0 place-items-start relative row-1" data-name="Group">
                                <Group>
                                  <path d={svgPaths.p6eff900} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </Group>
                                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[8.71%] place-items-start relative row-1" data-name="Group">
                                  <div className="col-1 h-[49.884px] ml-0 mt-0 relative row-1 w-[16.517px]" data-name="Group">
                                    <div className="absolute inset-[-0.5%_-1.51%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0164 50.3837">
                                        <g id="Group">
                                          <path d={svgPaths.p2494cf00} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                          <g id="Group_2">
                                            <path d={svgPaths.p14b92200} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <Vector />
                              </div>
                              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.51%] mt-[20.31%] place-items-start relative row-1" data-name="Group">
                                <Group>
                                  <path d={svgPaths.p1dee7800} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </Group>
                                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[9.42%] place-items-start relative row-1" data-name="Group">
                                  <div className="col-1 h-[45.78px] ml-0 mt-0 relative row-1 w-[16.516px]" data-name="Group">
                                    <div className="absolute inset-[-0.55%_-1.51%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0166 46.2804">
                                        <g id="Group">
                                          <path d={svgPaths.p1a9ec900} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                          <g id="Group_2">
                                            <path d={svgPaths.p2193c400} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <Vector />
                              </div>
                              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[42.36%] place-items-start relative row-1" data-name="Group">
                                <div className="col-1 h-[9.518px] ml-[0.51%] mt-0 relative row-1 w-[16.433px]" data-name="Group">
                                  <div className="absolute inset-[-2.63%_-1.52%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9329 10.0185">
                                      <g id="Group">
                                        <path d={svgPaths.pf7bc100} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[10.56%] place-items-start relative row-1" data-name="Group">
                                  <div className="col-1 h-[40.309px] ml-0 mt-0 relative row-1 w-[16.516px]" data-name="Group">
                                    <div className="absolute inset-[-0.62%_-1.51%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0153 40.8091">
                                        <g id="Group">
                                          <path d={svgPaths.pcc1d080} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                          <g id="Group_2">
                                            <path d={svgPaths.p1c088100} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                          </g>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-1 h-[4.759px] ml-[8.33px] mt-[4.76px] relative row-1 w-[8.188px]" data-name="Vector">
                                  <div className="absolute inset-[-5.25%_-3.05%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.68852 5.2586">
                                      <path d={svgPaths.p3ff7bb80} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
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
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[54.61%] mt-[65.79%] place-items-start relative row-1" data-name="Group">
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 h-[18.517px] ml-0 mt-0 relative row-1 w-[24.334px]" data-name="Group">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.3337 18.5171">
                            <g id="Group">
                              <path d={svgPaths.p318f9300} fill="var(--fill-0, #B4EB38)" id="Vector" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.99%] mt-[6.26%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <Group1>
                          <path d={svgPaths.p3b32b730} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </Group1>
                        <Group1>
                          <path d={svgPaths.p3ddff680} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                        </Group1>
                        <div className="col-1 h-[23.542px] ml-[59.89%] mt-[43.53%] relative row-1 w-[22.563px]" data-name="Group">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.563 23.5423">
                            <g id="Group">
                              <path d={svgPaths.p378ec200} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[231px] items-center justify-between relative shrink-0 w-[564px]" data-name="Service Item">
              <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
              <div className="content-stretch flex flex-col h-[232px] items-start justify-end p-[24px] relative shrink-0 w-[315px]" data-name="Service Text Container">
                <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[16px]" data-name="Service Description Container">
                  <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] relative shrink-0 text-[#101700]">{`Inteligência & Operação`}</p>
                  <p className="font-['Inter_Display:Regular',sans-serif] leading-[107.61499786376953%] relative shrink-0 text-[#70745a] w-[235px] whitespace-pre-wrap">Modelamos indicadores, automatizamos processos e reduzimos fricção operacional.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[232px] items-center justify-center p-[24px] relative shrink-0 w-[249px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 h-[32.53px] ml-[66.16px] mt-[97.47px] relative row-1 w-[39.125px]" data-name="Vector">
                    <div className="absolute inset-[-0.77%_-0.64%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.6252 33.0299">
                        <path d={svgPaths.p132de080} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 h-[14.799px] ml-[38.3px] mt-[94.88px] relative row-1 w-[19.75px]" data-name="Vector">
                    <div className="absolute inset-[-1.69%_-1.27%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2502 15.2992">
                        <path d={svgPaths.p9ce4a00} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 h-[12.082px] ml-[14.85px] mt-[81.12px] relative row-1 w-[16.622px]" data-name="Vector">
                    <div className="absolute inset-[-2.07%_-1.5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1223 12.5824">
                        <path d={svgPaths.p2e08dff0} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 h-[14.781px] ml-[113.26px] mt-[94.77px] relative row-1 w-[19.911px]" data-name="Vector">
                    <div className="absolute inset-[-1.69%_-1.26%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4111 15.2813">
                        <path d={svgPaths.p28c6ae80} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 h-[11.993px] ml-[139.77px] mt-[80.96px] relative row-1 w-[16.855px]" data-name="Vector">
                    <div className="absolute inset-[-2.08%_-1.48%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3547 12.4932">
                        <path d={svgPaths.p1754400} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.39%] mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[56.64%] place-items-start relative row-1" data-name="Group">
                          <Group2 additionalClassNames="ml-0">
                            <path d={svgPaths.p34488c80} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </Group2>
                          <Group3 additionalClassNames="ml-[0.15%]">
                            <path d={svgPaths.p64b2180} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </Group3>
                        </div>
                        <div className="col-1 h-[22.796px] ml-[31.43%] mt-[28.32%] relative row-1 w-[27.029px]" data-name="Group">
                          <div className="absolute inset-[-1.1%_-0.92%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5276 23.2963">
                              <g id="Group">
                                <g id="Group_2">
                                  <path d={svgPaths.p2936fc80} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                                <path d={svgPaths.p348b5f00} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <g id="Group_3">
                                  <path d={svgPaths.p25c5d00} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="col-1 h-[22.796px] ml-[63.4%] mt-0 relative row-1 w-[27.029px]" data-name="Group">
                          <div className="absolute inset-[-1.1%_-0.92%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5285 23.2963">
                              <g id="Group">
                                <g id="Group_2">
                                  <path d={svgPaths.p3aa08800} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                                <path d={svgPaths.pfca5c80} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                <g id="Group_3">
                                  <path d={svgPaths.p30962eb0} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[6.15%] mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[51.01%] mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[64.47%] mt-[56.64%] place-items-start relative row-1" data-name="Group">
                            <Group2 additionalClassNames="ml-[33.32%]">
                              <path d={svgPaths.p14d2e400} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              <path d={svgPaths.p1932bcc0} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group2>
                            <Group3 additionalClassNames="ml-0">
                              <path d={svgPaths.p30c398e0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group3>
                          </div>
                          <div className="col-1 h-[22.796px] ml-[31.97%] mt-[28.32%] relative row-1 w-[27.029px]" data-name="Group">
                            <div className="absolute inset-[-1.1%_-0.92%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.528 23.2963">
                                <g id="Group">
                                  <g id="Group_2">
                                    <path d={svgPaths.p17218200} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                  <path d={svgPaths.p23b2cc00} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <g id="Group_3">
                                    <path d={svgPaths.p1f1c0b00} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[22.796px] ml-0 mt-0 relative row-1 w-[27.029px]" data-name="Group">
                            <div className="absolute inset-[-1.1%_-0.92%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.528 23.2964">
                                <g id="Group">
                                  <g id="Group_2">
                                    <path d={svgPaths.p27d94900} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                  <path d={svgPaths.p3ec81800} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <g id="Group_3">
                                    <path d={svgPaths.p1f1c0b00} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[2.6%] mt-[37.67%] place-items-start relative row-1" data-name="Group">
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                            <div className="col-1 h-[8.16px] ml-0 mt-0 relative row-1 w-[12.268px]" data-name="Group">
                              <div className="absolute inset-[-3.06%_-2.04%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7685 8.66016">
                                  <g id="Group">
                                    <path d={svgPaths.p8c4c170} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[7.31%] place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[109.297px] ml-[0.05%] mt-0 relative row-1 w-[149.78px]" data-name="Group">
                            <div className="absolute inset-[-0.23%_-0.17%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.28 109.797">
                                <g id="Group">
                                  <path d={svgPaths.p337e41e0} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p22588e00} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.pfd1bf80} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[88.849px] ml-[0.05%] mt-0 relative row-1 w-[149.78px]" data-name="Group">
                            <div className="absolute inset-[-0.28%_-0.17%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.28 89.3491">
                                <g id="Group">
                                  <path d={svgPaths.p2ab4cf80} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #D6DACE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 h-[64.863px] ml-0 mt-[40.65%] relative row-1 w-[75.194px]" data-name="Group">
                            <div className="absolute inset-[-0.39%_-0.33%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6938 65.3631">
                                <g id="Group">
                                  <path d={svgPaths.p2ac26480} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p1b092380} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  <path d={svgPaths.p6705c00} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[22.51%] mt-[12.02%] place-items-start relative row-1" data-name="Group">
                            <div className="col-1 h-[30.725px] ml-[50.13%] mt-[44.28%] relative row-1 w-[41.091px]" data-name="Group">
                              <div className="absolute inset-[-0.81%_-0.61%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.5912 31.2246">
                                  <g id="Group">
                                    <path d={svgPaths.pe265100} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="col-1 h-[48.848px] ml-[0.04%] mt-0 relative row-1 w-[82.361px]" data-name="Group">
                              <div className="absolute inset-[-0.51%_-0.3%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.8612 49.3484">
                                  <g id="Group">
                                    <path d={svgPaths.p20a03900} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="col-1 h-[30.717px] ml-0 mt-[44.29%] relative row-1 w-[41.343px]" data-name="Group">
                              <div className="absolute inset-[-0.81%_-0.61%_-0.81%_-0.6%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.8432 31.2172">
                                  <g id="Group">
                                    <path d={svgPaths.p3f6c4000} fill="var(--fill-0, #D6DACE)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[52.5%] place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[64.97%] mt-[48.08%] place-items-start relative row-1" data-name="Group">
                            <Group4 additionalClassNames="ml-[31.62%]">
                              <path d={svgPaths.p303bc600} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group4>
                            <Group5 additionalClassNames="ml-0 mt-[36.21%]">
                              <path d={svgPaths.p14921600} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group5>
                            <Group6 additionalClassNames="ml-0">
                              <path d={svgPaths.p20dd400} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group6>
                          </div>
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[29.68%] mt-[22.94%] place-items-start relative row-1" data-name="Group">
                            <Group7 additionalClassNames="ml-[31.56%]">
                              <path d={svgPaths.pcfdc00} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group7>
                            <div className="col-1 h-[19.711px] ml-0 mt-[36.22%] relative row-1 w-[8.782px]" data-name="Group">
                              <Wrapper additionalClassNames="inset-[-1.27%_-2.85%]">
                                <path d={svgPaths.p2995d700} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                              </Wrapper>
                            </div>
                            <Group8>
                              <path d={svgPaths.p3d04f300} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group8>
                          </div>
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                            <div className="col-1 h-[25.698px] ml-[31.59%] mt-[16.83%] relative row-1 w-[18.934px]" data-name="Group">
                              <div className="absolute inset-[-0.97%_-1.32%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.434 26.1977">
                                  <g id="Group">
                                    <path d={svgPaths.p36d98180} fill="var(--fill-0, #B4EB38)" id="Vector" stroke="var(--stroke-0, #B4EB38)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="col-1 h-[19.711px] ml-0 mt-[36.21%] relative row-1 w-[8.782px]" data-name="Group">
                              <div className="absolute inset-[-1.27%_-2.85%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.28201 20.2114">
                                  <g id="Group">
                                    <path d={svgPaths.p311a7780} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <Group9 additionalClassNames="ml-0">
                              <path d={svgPaths.p1e8fcf80} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group9>
                          </div>
                        </div>
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[53.92%] mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[48.08%] place-items-start relative row-1" data-name="Group">
                            <Group4 additionalClassNames="ml-0">
                              <path d={svgPaths.p1d42ea00} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group4>
                            <Group5 additionalClassNames="ml-[68.27%] mt-[36.21%]">
                              <path d={svgPaths.p12524580} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group5>
                            <Group6 additionalClassNames="ml-[0.03%]">
                              <path d={svgPaths.p14219700} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group6>
                          </div>
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.27%] mt-[22.94%] place-items-start relative row-1" data-name="Group">
                            <Group7 additionalClassNames="ml-0">
                              <path d={svgPaths.p2aaf7600} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group7>
                            <Group5 additionalClassNames="ml-[68.28%] mt-[36.22%]">
                              <path d={svgPaths.p3c099b00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group5>
                            <Group8>
                              <path d={svgPaths.p3826e200} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group8>
                          </div>
                          <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[11.17%] mt-0 place-items-start relative row-1" data-name="Group">
                            <div className="col-1 h-[50.703px] ml-0 mt-[9.3%] relative row-1 w-[61.448px]" data-name="Group">
                              <div className="absolute inset-[-0.49%_-0.41%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.9486 51.2032">
                                  <g id="Group">
                                    <path d={svgPaths.p339c89c0} fill="var(--fill-0, #101700)" id="Vector" stroke="var(--stroke-0, #101700)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                    <path d={svgPaths.p3854d180} id="Vector_2" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                    <path d={svgPaths.p305f2900} id="Vector_3" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                    <path d={svgPaths.p1a5d0980} id="Vector_4" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <Group5 additionalClassNames="ml-[87.49%] mt-[20.01%]">
                              <path d={svgPaths.p162c1480} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group5>
                            <Group9 additionalClassNames="ml-[60.58%]">
                              <path d={svgPaths.p31844d00} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                            </Group9>
                          </div>
                        </div>
                      </div>
                      <div className="col-1 h-[9.281px] ml-[66.17px] mt-[112.39px] relative row-1 w-[3.994px]" data-name="Vector">
                        <div className="absolute inset-[-2.69%_-6.26%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.494 9.78062">
                            <path d={svgPaths.p35ca2940} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[9.256px] ml-[38.3px] mt-[97.47px] relative row-1 w-[3.994px]" data-name="Vector">
                        <div className="absolute inset-[-2.7%_-6.26%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.494 9.75576">
                            <path d={svgPaths.p3da25400} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[9.235px] ml-[14.84px] mt-[83.81px] relative row-1 w-[3.98px]" data-name="Vector">
                        <div className="absolute inset-[-2.71%_-6.28%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.47999 9.73549">
                            <path d={svgPaths.p5109300} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[7.29px] ml-[148.14px] mt-[53.04px] relative row-1 w-[12.251px]" data-name="Vector">
                        <div className="absolute inset-[-3.43%_-2.04%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7507 7.79054">
                            <path d={svgPaths.pe1fd380} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="col-1 h-[22.215px] ml-[85.73px] mt-[75.25px] relative row-1 w-[37.329px]" data-name="Vector">
                        <div className="absolute inset-[-1.13%_-0.67%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.8288 22.7151">
                            <path d={svgPaths.p2d9a3000} id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.72%] mt-[26.45%] place-items-start relative row-1" data-name="Group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[31.26%] place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[17.219px] ml-0 mt-0 relative row-1 w-[28.968px]" data-name="Group">
                            <div className="absolute inset-[-1.45%_-0.86%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.468 17.7189">
                                <g id="Group">
                                  <path d={svgPaths.p224b5e00} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[38.86%] mt-0 place-items-start relative row-1" data-name="Group">
                          <div className="col-1 h-[12.298px] ml-0 mt-0 relative row-1 w-[20.702px]" data-name="Group">
                            <div className="absolute inset-[-2.03%_-1.21%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2021 12.798">
                                <g id="Group">
                                  <path d={svgPaths.p112ebc00} fill="var(--fill-0, #70745A)" id="Vector" stroke="var(--stroke-0, #70745A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.5" />
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
          </div>
          <Helper1 additionalClassNames="h-[463px]" />
        </div>
        <div className="h-[188px] relative shrink-0 w-full" data-name="Quote Container">
          <div className="flex flex-col items-end justify-center size-full">
            <div className="content-stretch flex flex-col items-end justify-center pb-[53px] pl-[192px] pr-[537px] pt-[48px] relative size-full">
              <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[24px] w-[221px] whitespace-pre-wrap">Decisão deixa de ser opinião e passa a ser engenharia.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[462px] items-center left-0 top-[2907px] w-[1512px]" data-name="Framework">
        <Helper5 />
        <div className="bg-[#101700] content-stretch flex flex-col h-[462px] items-center justify-between px-[24px] py-[64px] relative shrink-0 w-[1128px]" data-name="Framework Content">
          <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
          <div className="content-stretch flex flex-col h-[96px] items-center justify-between relative shrink-0 text-center w-[450px] whitespace-pre-wrap" data-name="Framework Header">
            <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-full" data-name="Framework Title Container">
              <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full">Engineering Predictable Growth</p>
              <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f3ef] text-[24px] w-full">The Business Engineering Framework™</p>
            </div>
            <p className="font-['Inter_Tight:Regular',sans-serif] font-normal leading-[110.17500305175781%] relative shrink-0 text-[#70745a] text-[16px] w-[343px]">Estruturamos cada projeto em camadas:</p>
          </div>
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-[653px]" data-name="Framework Layers">
            <FrameworkLayerText text="Identidade" additionalClassNames="items-center" />
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[96px]" data-name="Framework Layer">
              <Wrapper3 additionalClassNames="size-[85px]">
                <circle cx="42.5" cy="42.5" id="Ellipse 2" r="42" stroke="var(--stroke-0, #70745A)" />
              </Wrapper3>
              <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.302] min-w-full not-italic relative shrink-0 text-[#70745a] text-[16px] text-center w-[min-content] whitespace-pre-wrap">Fundamentos</p>
            </div>
            <FrameworkLayerText text="Arquitetura" additionalClassNames="items-center" />
            <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-[86px]" data-name="Framework Layer">
              <div className="h-[85px] relative shrink-0 w-full">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 85">
                  <path d={svgPaths.p20724880} id="Ellipse 4" stroke="var(--stroke-0, #70745A)" />
                </svg>
              </div>
              <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.302] not-italic relative shrink-0 text-[#70745a] text-[16px] text-center w-full whitespace-pre-wrap">Sistema Operacional</p>
            </div>
            <FrameworkLayerText text="Camada de Inteligência" additionalClassNames="items-end" />
          </div>
        </div>
        <Helper5 />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-[3369px] w-[1512px]" data-name="Cases">
        <div className="h-[212px] relative shrink-0 w-full" data-name="Cases Header">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-center pb-[36px] pt-[64px] px-[192px] relative size-full">
              <div className="content-stretch flex items-end relative shrink-0 w-[1030px]" data-name="Cases Content">
                <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-[499px] whitespace-pre-wrap" data-name="Cases Text Container">
                  <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] min-w-full not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-[min-content]">/cases</p>
                  <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[40px] w-[322px]">Onde a estratégia virou sistema.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[462px] items-center relative shrink-0 w-full" data-name="Case Studies Container">
          <Helper1 additionalClassNames="h-[462px]" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[564px]" data-name="Case Study">
            <Wrapper5>
              <Helper4 />
              <CaseStudyDescriptionContainer text="The AI at the table." text1="IA aplicada à experiência de restaurante, conectando cliente, equipe e gestor." />
            </Wrapper5>
            <Wrapper5>
              <Wrapper4 additionalClassNames="h-[22.23px]">
                <g id="Case Study Icon">
                  <path d={svgPaths.p1e64ea00} fill="var(--fill-0, #101700)" id="Vector" />
                  <path d={svgPaths.p27389c0} fill="var(--fill-0, #101700)" id="Vector_2" />
                  <path d={svgPaths.p3cb0fc80} fill="var(--fill-0, #101700)" id="Vector_3" />
                  <path d={svgPaths.p2912eb80} fill="var(--fill-0, #101700)" id="Vector_4" />
                  <path d={svgPaths.pc669e00} fill="var(--fill-0, #101700)" id="Vector_5" />
                  <path d={svgPaths.p2dd74f00} fill="var(--fill-0, #101700)" id="Vector_6" />
                  <path d={svgPaths.p1d01bca2} fill="var(--fill-0, #101700)" id="Vector_7" />
                  <g id="Case Study Icon Container">
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
              </Wrapper4>
              <CaseStudyDescriptionContainer text="Organizational Intelligence Layer." text1="Estrutura organizacional inteligente para empresas que crescem mais rápido que sua capacidade operacional." />
            </Wrapper5>
          </div>
          <div className="content-stretch flex flex-col h-[462px] items-center justify-center p-[24px] relative shrink-0 w-[564px]" data-name="Case Study Image Container">
            <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
            <div className="bg-white h-[430px] shrink-0 w-[532px]" />
          </div>
          <Helper1 additionalClassNames="h-[462px]" />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1512px]" data-name="Audience Container">
          <div className="content-stretch flex h-[462px] items-center relative shrink-0 w-full" data-name="Audience Content">
            <Helper1 additionalClassNames="h-[462px]" />
            <div className="content-stretch flex flex-col h-[462px] items-center justify-center p-[24px] relative shrink-0 w-[1128px]" data-name="Audience Header">
              <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[24px] items-center leading-[normal] relative shrink-0" data-name="Audience Title Container">
                <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase">/Para Quem é a Shift Labs</p>
                <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[40px] text-center w-[454px] whitespace-pre-wrap">Estrutura que acompanha crescimento.</p>
              </div>
            </div>
            <Helper1 additionalClassNames="h-[462px]" />
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Audience List">
            <Helper1 additionalClassNames="h-[236px]" />
            <div className="content-start flex flex-wrap gap-0 items-start relative shrink-0 w-[1128px]" data-name="Audience Items">
              <AudienceItemText text="Empresas que já validaram mercado." />
              <div className="content-stretch flex h-[118px] items-end p-[24px] relative shrink-0 w-[564px]" data-name="Audience Item">
                <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
                <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px] w-[171px] whitespace-pre-wrap">Fundadores que querem previsibilidade.</p>
              </div>
              <div className="content-stretch flex h-[118px] items-end p-[24px] relative shrink-0 w-[564px]" data-name="Audience Item">
                <div aria-hidden="true" className="absolute border border-[#d6dace] border-solid inset-[-0.5px] pointer-events-none" />
                <p className="font-['Inter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#101700] text-[16px] w-[194px] whitespace-pre-wrap">Negócios que cresceram rápido demais.</p>
              </div>
              <AudienceItemText text="Produtos que precisam de estrutura." />
            </div>
            <Helper1 additionalClassNames="h-[236px]" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-center left-[-780px] top-[4741px] w-[3071px]" data-name="Text long">
        <div className="content-stretch flex flex-col h-[212px] items-center justify-center px-[192px] py-[36px] relative shrink-0 w-[1512px]" data-name="Header Container">
          <div className="content-stretch flex flex-col gap-[32px] items-center leading-[normal] relative shrink-0 w-[430px] whitespace-pre-wrap" data-name="Subheader Container">
            <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#70745a] text-[14px] uppercase w-full">Não somos para quem quer apenas “uma landing page”.</p>
            <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[24px] text-center w-full">What makes us different</p>
          </div>
        </div>
        <p className="font-['Inter_Tight:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#101700] text-[128px] text-center w-[min-content] whitespace-pre-wrap">Most players optimize pieces. We optimize the system.</p>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1512px]" data-name="Content Container">
          <div className="h-[48px] shrink-0 w-full" data-name="Spacer" />
          <div className="h-[48px] shrink-0 w-full" data-name="Spacer" />
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Features Container">
            <Helper1 additionalClassNames="h-[118px]" />
            <FeatureItemText text="Design isolado." />
            <FeatureItemText text="Código isolado." />
            <FeatureItemText text="Marketing isolado." />
            <Helper1 additionalClassNames="h-[118px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[212px] items-center justify-center px-[192px] py-[36px] relative shrink-0 w-[1512px]" data-name="Footer Container">
          <p className="font-['Inter_Tight:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#101700] text-[24px] text-center">A ShiftLabs entrega coordenação.</p>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[462px] items-center left-0 top-[5472px] w-[1512px]" data-name="CTA">
        <Helper1 additionalClassNames="h-[462px]" />
        <div className="bg-[#b4eb38] content-stretch flex flex-col items-start justify-center p-[24px] relative shrink-0 w-[564px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#d6dace] border-b border-l border-solid border-t inset-[-0.5px_0_-0.5px_-0.5px] pointer-events-none" />
          <div className="content-stretch flex flex-col h-[414px] items-start justify-between relative shrink-0 w-[450px] whitespace-pre-wrap" data-name="Container">
            <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] relative shrink-0 w-full" data-name="Container">
              <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#517400] text-[16px] uppercase w-full">/Call to Action</p>
              <p className="font-['Inter_Tight:Medium',sans-serif] font-medium relative shrink-0 text-[#101700] text-[40px] w-full">Ready to structure what you’re building?</p>
            </div>
            <p className="font-['Inter_Display:Regular',sans-serif] leading-[107.61499786376953%] not-italic relative shrink-0 text-[#517400] text-[16px] w-[360px]">Se você sente que sua empresa poderia estar melhor organizada, mais previsível e mais eficiente, o problema provavelmente não é esforço.</p>
          </div>
        </div>
        <div className="bg-[#b4eb38] content-stretch flex flex-col h-[462px] items-end justify-end p-[24px] relative shrink-0 w-[564px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#d6dace] border-b border-r border-solid border-t inset-[-0.5px_-0.5px_-0.5px_0] pointer-events-none" />
          <ButtonContainerText text="conhecer mais" additionalClassNames="items-end justify-between w-[158px]" />
        </div>
        <Helper1 additionalClassNames="h-[462px]" />
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-[5934px] w-[1512px]" data-name="Footer">
        <Wrapper1>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[356px]" data-name="Company Description">
            <div className="h-[34.064px] relative shrink-0 w-[33.915px]" data-name="Group">
              <Helper />
            </div>
            <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.302] min-w-full not-italic relative shrink-0 text-[#70745a] text-[16px] w-[min-content] whitespace-pre-wrap">Arquitetamos produto, tecnologia, comercial e operação em fluxos coordenados, com inteligência aplicada de ponta a ponta.</p>
            <p className="font-['Inter_Tight:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#70745a] text-[16px] w-[min-content] whitespace-pre-wrap">
              <span className="font-['Inter_Display:Medium',sans-serif] leading-[1.302] text-[#101700]">© 2026 ShiftLabs.</span>
              <span className="font-['Inter_Display:Regular',sans-serif] leading-[1.302]">{` Todos os direitos reservados.`}</span>
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[287px]" data-name="Social Media Links">
            <p className="font-['Basis_Grotesque_Pro_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#70745a] text-[16px] uppercase w-full whitespace-pre-wrap">/Call to Action</p>
            <div className="content-stretch flex gap-[21px] items-center leading-[0] relative shrink-0 w-full" data-name="Social Media Icons">
              <Text text="LinkedIn">
                <path d={svgPaths.p5160f00} fill="var(--fill-0, #101700)" id="Vector" />
              </Text>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Instagram Icon">
                <p className="col-1 font-['Inter_Display:Regular',sans-serif] leading-[1.302] ml-[22px] mt-[0.06px] not-italic relative row-1 text-[#70745a] text-[16px]">Instagram</p>
                <Wrapper2>
                  <g id="Instagram Vector">
                    <path d={svgPaths.p14360c80} fill="var(--fill-0, #101700)" id="Vector" />
                    <path d={svgPaths.p27980d00} fill="var(--fill-0, #101700)" id="Vector_2" />
                    <path d={svgPaths.p1b767a00} fill="var(--fill-0, #101700)" id="Vector_3" />
                  </g>
                </Wrapper2>
              </div>
              <Text text="GitHub">
                <path clipRule="evenodd" d={svgPaths.p27f75600} fill="var(--fill-0, #101700)" fillRule="evenodd" id="Vector" />
              </Text>
            </div>
          </div>
        </Wrapper1>
        <Wrapper1>
          <div className="h-[209.816px] relative shrink-0 w-[1128.001px]" data-name="Logo Vectors">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1128 209.816">
              <g id="Logo Vectors">
                <path d={svgPaths.p7ab8900} fill="var(--fill-0, #101700)" id="Vector" />
                <path d={svgPaths.p3b0eb280} fill="var(--fill-0, #101700)" id="Vector_2" />
                <path d={svgPaths.p80dcd80} fill="var(--fill-0, #101700)" id="Vector_3" />
                <path d={svgPaths.p2ab56d00} fill="var(--fill-0, #101700)" id="Vector_4" />
                <path d={svgPaths.p16d8bc00} fill="var(--fill-0, #101700)" id="Vector_5" />
                <path d={svgPaths.p16f12c00} fill="var(--fill-0, #101700)" id="Vector_6" />
                <path d={svgPaths.p20f31800} fill="var(--fill-0, #101700)" id="Vector_7" />
                <path d={svgPaths.p33ec1870} fill="var(--fill-0, #101700)" id="Vector_8" />
                <path d={svgPaths.p20d98480} fill="var(--fill-0, #101700)" id="Vector_9" />
              </g>
            </svg>
          </div>
        </Wrapper1>
      </div>
    </div>
  );
}