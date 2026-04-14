"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import {
  MapSection,
  SectionHeader,
  Title,
  PrimaryButton,
  MapWrapper,
  MapContainer,
  CoverRect,
  MapPin,
  Popover,
  PopoverClose,
  PopoverList,
  PopoverItem
} from "./StoreMap.css";

const StoreMap = () => {
  const t = useTranslations("Map");
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const togglePoint = (id: number) => {
    setActivePoint(activePoint === id ? null : id);
  };

  const mapZones = [
    {
      id: 1, btnTop: '20.62%', btnLeft: '4.34%',
      overlays: [{ l: '1.49%', r: '92.99%', t: '2.7%', b: '61.38%' }],
      items: [t("item_1")]
    },
    {
      id: 2, btnTop: '6.53%', btnLeft: '53%',
      overlays: [
        { l: '12.7%', r: '76.8%', t: '2.77%', b: '89.47%' },
        { l: '23.21%', r: '67.24%', t: '2.77%', b: '89.47%' },
        { l: '32.76%', r: '57.73%', t: '2.77%', b: '89.47%' },
        { l: '42.27%', r: '36.18%', t: '2.77%', b: '89.47%' },
        { l: '63.81%', r: '24.27%', t: '2.77%', b: '89.47%' },
        { l: '75.73%', r: '14.5%', t: '2.77%', b: '89.47%' }
      ],
      items: [t("item_2"), t("item_3"), t("item_4"), t("item_5"), t("item_6"), t("item_7")]
    },
    {
      id: 3, btnTop: '28.48%', btnLeft: '47.15%',
      overlays: [
        { l: '12.72%', r: '81.75%', t: '18.48%', b: '61.38%' },
        { l: '22.55%', r: '71.92%', t: '18.48%', b: '61.38%' },
        { l: '32.45%', r: '62.03%', t: '18.48%', b: '61.38%' },
        { l: '42.3%', r: '48.31%', t: '18.48%', b: '61.38%' },
        { l: '56.08%', r: '38.4%', t: '18.48%', b: '61.38%' },
        { l: '65.91%', r: '24.44%', t: '18.48%', b: '61.38%' },
        { l: '79.93%', r: '14.55%', t: '18.48%', b: '61.38%' }
      ],
      items: [t("item_8"), t("item_9"), t("item_10"), t("item_11"), t("item_12"), t("item_13"), t("item_14"), t("item_15"), t("item_16")]
    },
    {
      id: 4, btnTop: '56.34%', btnLeft: '18.09%',
      overlays: [{ l: '7.15%', r: '70.98%', t: '46.49%', b: '33.49%' }],
      items: [t("item_32"), t("item_33"), t("item_34"), t("item_35")]
    },
    {
      id: 5, btnTop: '56.5%', btnLeft: '54.3%',
      overlays: [
        { l: '33.33%', r: '61.44%', t: '46.49%', b: '33.49%' },
        { l: '42.86%', r: '34.26%', t: '46.49%', b: '33.49%' }
      ],
      items: [t("item_30"), t("item_31")]
    },
    {
      id: 6, btnTop: '56.5%', btnLeft: '77.76%',
      overlays: [
        { l: '70.07%', r: '24.41%', t: '46.49%', b: '33.49%' },
        { l: '79.93%', r: '14.55%', t: '46.49%', b: '33.49%' }
      ],
      items: [t("item_22"), t("item_23")]
    },
    {
      id: 7, btnTop: '48.0%', btnLeft: '94.85%',
      overlays: [
        { l: '91.26%', r: '1.53%', t: '2.71%', b: '69.05%' },
        { l: '91.26%', r: '1.53%', t: '30.95%', b: '57.62%' },
        { l: '91.26%', r: '1.53%', t: '42.38%', b: '46.91%' },
        { l: '91.26%', r: '1.53%', t: '53.09%', b: '35.31%' },
        { l: '91.26%', r: '1.53%', t: '64.69%', b: '2.83%' }
      ],
      items: [t("item_17"), t("item_18"), t("item_19"), t("item_20"), t("item_21")]
    },
    {
      id: 8, btnTop: '78.1%', btnLeft: '61.9%',
      overlays: [
        { l: '42.86%', r: '50.65%', t: '74.39%', b: '18.07%' },
        { l: '70.07%', r: '14.55%', t: '74.39%', b: '18.16%' }
      ],
      items: [t("item_24"), t("item_25")]
    },
    {
      id: 9, btnTop: '93.40%', btnLeft: '63.85%',
      overlays: [
        { l: '41.3%', r: '40.8%', t: '89.71%', b: '2.83%' },
        { l: '59.2%', r: '31.64%', t: '89.71%', b: '2.83%' },
        { l: '68.36%', r: '22.59%', t: '89.71%', b: '2.83%' },
        { l: '77.4%', r: '14.45%', t: '89.71%', b: '2.83%' }
      ],
      items: [t("item_26"), t("item_27"), t("item_28"), t("item_29")]
    },
    {
      id: 10, btnTop: '93.27%', btnLeft: '27.35%', 
      overlays: [{ l: '25.15%', r: '70.5%', t: '90%', b: '3.5%' }], 
      items: [t("item_36")] 
    },
    {
      id: 11, btnTop: '81.5%', btnLeft: '10.9%', 
      overlays: [{ l: '8.8%', r: '87%', t: '78.5%', b: '15.2%' }], 
      items: [t("item_37")] 
    },
    {
      id: 12, btnTop: '93.27%', btnLeft: '10.9%', 
      overlays: [{ l: '8.8%', r: '87.1%', t: '90%', b: '3.5%' }], 
      items: [t("item_38")] 
    }
  ];

  return (
    <MapSection id="map">
      <SectionHeader>
        <Title>{t("title")}</Title>
        <PrimaryButton 
          href="https://shop.webshining.space/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {t("button")}
        </PrimaryButton>
      </SectionHeader>

      <MapWrapper>
        <MapContainer>
          <Image 
            src="/map-final.png" 
            fill 
            alt={t("map_alt")} 
            style={{ objectFit: 'contain' }}
            priority
          />

          {mapZones.map((zone) => 
            zone.overlays.map((rect, index) => (
              <CoverRect 
                key={`rect-${zone.id}-${index}`}
                $isActive={activePoint === zone.id}
                $l={rect.l}
                $r={rect.r}
                $t={rect.t}
                $b={rect.b}
              />
            ))
          )}

          {mapZones.map((zone) => {
            let direction: 'top' | 'bottom' | 'left' | 'right';
            if (zone.id === 1) {
              direction = 'right';
            } else if (zone.id === 7) {
              direction = 'left';
            } else {
              const isBottomHalf = parseFloat(zone.btnTop) > 75;
              direction = isBottomHalf ? 'top' : 'bottom';
            }

            return (
              <div 
                key={`btn-${zone.id}`} 
                style={{ position: 'absolute', left: zone.btnLeft, top: zone.btnTop }}
              >
                <MapPin 
                  $isActive={activePoint === zone.id}
                  onClick={() => togglePoint(zone.id)}
                  aria-label={t("show_zone")}
                >
                  ?
                </MapPin>

                {activePoint === zone.id && (
                  <Popover $direction={direction}>
                    <PopoverClose onClick={(e: React.MouseEvent<HTMLButtonElement>) => { 
                      e.stopPropagation(); 
                      setActivePoint(null); 
                    }}>
                      <X size={20} />
                    </PopoverClose>
                    <PopoverList>
                      {zone.items.map((item, index) => (
                        <PopoverItem key={index}>{item}</PopoverItem>
                      ))}
                    </PopoverList>
                  </Popover>
                )}
              </div>
            );
          })}
        </MapContainer>
      </MapWrapper>
    </MapSection>
  );
};

export default StoreMap;